import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import Component from '../packages';

describe("渲染", () => {
    render(<Component src='/a8ccb573aeb231c14a84a3c7ea7364431550564.jpg'
        height={350}
        backgroundStyle={{
            backgroundSize: '130vw',
            backgroundPosition: '-69px 5%'
        }}
        test
        content="test content" />
    );

    expect(screen.getByText("test content")).toBeInTheDocument();
});