import React from 'react';
import { ReactP5Wrapper } from '@p5-wrapper/react'; // Corrected import statement

let y = 0;

const RocketAnimation = () => {
    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(100, 100).parent(canvasParentRef);
        y = p5.height;
    };

    const draw = p5 => {
        p5.background(255);
        p5.fill(255, 0, 0);
        p5.noStroke();
        p5.triangle(50, y, 40, y + 20, 60, y + 20);
        y -= 2;
        if (y < -20) y = p5.height;
    };

    return <ReactP5Wrapper setup={setup} draw={draw} />;
};

export default RocketAnimation;
