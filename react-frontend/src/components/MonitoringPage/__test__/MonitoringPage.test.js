import React from "react";
import { render, screen } from "@testing-library/react";

import MonitoringPage from "../MonitoringPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders monitoring page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <MonitoringPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("monitoring-datatable")).toBeInTheDocument();
    expect(screen.getByRole("monitoring-add-button")).toBeInTheDocument();
});
