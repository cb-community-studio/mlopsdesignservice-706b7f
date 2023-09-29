import React from "react";
import { render, screen } from "@testing-library/react";

import MonitoringCreateDialogComponent from "../MonitoringCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders monitoring create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <MonitoringCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("monitoring-create-dialog-component")).toBeInTheDocument();
});
