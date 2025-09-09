'use client';

import React, { useEffect, useRef } from 'react';
import P5WrapClient from './P5WrapClient';

export default function SpiralCanvas({ height = 400 }) {
  const canvasRef = useRef();

  useEffect(() => {
    const sketch = (p) => {
      p.setup = () => {
        const canvas = p.createCanvas(40, height);
        canvas.parent(canvasRef.current);
        p.noFill();
        p.stroke(80);
        p.strokeWeight(2);

        const amplitude = 8;
        const frequency = 0.3;
        const spacing = 0.1;
        const threshold = 0.02;

        for (let y = 0; y <= height; y += spacing) {
          const angle = y * frequency;
          const sino = p.sin(angle);
          const coso = p.cos(angle);
          const x = 20 + 2 * (sino * amplitude);
          let y3d = y;

          if (Math.abs(coso) < threshold && sino > 0) {
            p.fill(0);
            p.noStroke();
            p.circle(x, y, 6);
            p.noFill();
            p.stroke(80);
          }

          if (sino > 0 && coso > 0) {
            p.stroke(255);
          } else {
            y3d = y + 7 * coso;
            p.stroke(0);
          }

          p.point(x, y3d);
        }

        p.stroke(150);
        p.strokeWeight(1.5);
        p.line(20, 0, 20, height);
      };
    };

    const p5Instance = new P5WrapClient(sketch);

    return () => {
      p5Instance.remove(); // cleanup on unmount
    };
  }, [height]);

  return <div ref={canvasRef} style={{ width: '40px', height: `${height}px` }} />;
}
