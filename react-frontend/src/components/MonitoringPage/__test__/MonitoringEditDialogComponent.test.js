import React from "react";
import { render, screen } from "@testing-library/react";

import MonitoringEditDialogComponent from "../MonitoringEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders monitoring edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <MonitoringEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("monitoring-edit-dialog-component")).toBeInTheDocument();
});
