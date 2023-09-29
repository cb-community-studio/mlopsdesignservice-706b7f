import React from "react";
import { render, screen } from "@testing-library/react";

import PreprocessingPage from "../PreprocessingPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders preprocessing page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <PreprocessingPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("preprocessing-datatable")).toBeInTheDocument();
    expect(screen.getByRole("preprocessing-add-button")).toBeInTheDocument();
});
