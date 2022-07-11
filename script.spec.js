import {expect, it} from "@jest/globals";

import { translateToMorse } from "./script.js";

// positive tests
it("should translate hello to .... . .-.. .-.. ---", () => {
    const result = translateToMorse("hello");
    expect(result).toBe(".... . .-.. .-.. ---");
});

it("should translate bye to -... -.-- .", () => {
    const result = translateToMorse("bye");
    expect(result).toBe("-... -.-- .");
});

it("should translate hello how are you  -- -.-- / -. .- -- . / .. ... / -.- .- ...-", () => {
    const result = translateToMorse("my name is kav");
    expect(result).toBe("-- -.-- / -. .- -- . / .. ... / -.- .- ...-");
});