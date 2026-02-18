import { useEffect, useCallback } from 'react';
import { gsap } from 'gsap';

/**
 * useSvgHoverStretch
 *
 * Attaches mousemove/mouseleave listeners to a container ref.
 * On hover, SVG letter paths stretch/shrink based on cursor X position:
 *  - Letters near the cursor → stretch (increase scaleY)
 *  - Letters on the opposite side → shrink (decrease scaleY)
 *
 * @param {React.RefObject} containerRef – ref to the element that receives mouse events
 * @param {object} options
 * @param {number[]} options.baseScales – default scaleY per letter (left→right order)
 * @param {string}  options.selector   – CSS selector for letter paths (default: 'path[data-char]')
 * @param {number}  options.stretchMax – max added to baseScale when stretched (default: 0.25)
 * @param {number}  options.shrinkMax  – max subtracted from baseScale when shrunk (default: 0.25)
 * @param {number}  options.duration   – GSAP animation duration in seconds (default: 0.45)
 * @param {string}  options.ease       – GSAP ease (default: 'power2.out')
 */
export default function useSvgHoverStretch(containerRef, options = {}) {
    const {
        baseScales = [],
        selector = 'path[data-char]',
        stretchMax = 0.25,
        shrinkMax = 0.25,
        duration = 0.45,
        ease = 'power2.out',
    } = options;

    const handleMouseMove = useCallback(
        (e) => {
            const container = containerRef.current;
            if (!container) return;

            // Find the SVG inside the container (desktop only)
            const svg =
                container.querySelector('svg:not(.is-hidden\\:md-up)') ||
                container.querySelector('svg');
            if (!svg) return;

            const paths = svg.querySelectorAll(selector);
            if (!paths.length) return;

            const rect = svg.getBoundingClientRect();
            // mouseXRatio: 0 = leftmost, 1 = rightmost
            const mouseXRatio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));

            paths.forEach((path, i) => {
                const total = paths.length;
                // normalised position of this letter: 0 = leftmost, 1 = rightmost
                const letterPos = total > 1 ? i / (total - 1) : 0.5;

                // influence: positive when letter & mouse are on the same side, negative when opposite
                // ranges roughly from -1 to +1
                const influence = (letterPos - 0.5) * (mouseXRatio - 0.5) * 4;

                const base = baseScales[i] ?? 0.85;
                let targetScale;
                if (influence > 0) {
                    // same side as cursor → stretch
                    targetScale = base + influence * stretchMax;
                } else {
                    // opposite side → shrink
                    targetScale = base + influence * shrinkMax;
                }

                // clamp to reasonable bounds
                targetScale = Math.max(0.35, Math.min(1.25, targetScale));

                gsap.to(path, {
                    scaleY: targetScale,
                    duration,
                    ease,
                    overwrite: 'auto',
                });
            });
        },
        [containerRef, baseScales, selector, stretchMax, shrinkMax, duration, ease],
    );

    const handleMouseLeave = useCallback(() => {
        const container = containerRef.current;
        if (!container) return;

        const svg =
            container.querySelector('svg:not(.is-hidden\\:md-up)') ||
            container.querySelector('svg');
        if (!svg) return;

        const paths = svg.querySelectorAll(selector);
        paths.forEach((path, i) => {
            gsap.to(path, {
                scaleY: baseScales[i] ?? 0.85,
                duration: duration * 1.2,
                ease,
                overwrite: 'auto',
            });
        });
    }, [containerRef, baseScales, selector, duration, ease]);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        el.addEventListener('mousemove', handleMouseMove);
        el.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            el.removeEventListener('mousemove', handleMouseMove);
            el.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [containerRef, handleMouseMove, handleMouseLeave]);
}
