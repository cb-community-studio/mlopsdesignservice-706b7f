import React from "react";
import { render, screen } from "@testing-library/react";

import ModeltrainingPage from "../ModeltrainingPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders modeltraining page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ModeltrainingPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("modeltraining-datatable")).toBeInTheDocument();
    expect(screen.getByRole("modeltraining-add-button")).toBeInTheDocument();
});
