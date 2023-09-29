import React from "react";
import { render, screen } from "@testing-library/react";

import ThresholdPage from "../ThresholdPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders threshold page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ThresholdPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("threshold-datatable")).toBeInTheDocument();
    expect(screen.getByRole("threshold-add-button")).toBeInTheDocument();
});
