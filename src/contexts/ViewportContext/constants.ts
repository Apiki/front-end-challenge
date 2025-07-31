import { createContext } from "react";
import type { IViewportContext } from "./types";

export const INITIAL_WIDTH_SIZE = window.innerWidth;

export const INITIAL_SCROLL_POSITION = 0;

export const WINDOW_TOP = 0;

export const ViewportContext = createContext({} as IViewportContext);
