import React from "react";
import { render, screen } from "@testing-library/react";

import VisualizationPage from "../VisualizationPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders visualization page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <VisualizationPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("visualization-datatable")).toBeInTheDocument();
    expect(screen.getByRole("visualization-add-button")).toBeInTheDocument();
});
