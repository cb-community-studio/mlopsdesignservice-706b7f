import React from "react";
import { render, screen } from "@testing-library/react";

import DockerPage from "../DockerPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders docker page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <DockerPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("docker-datatable")).toBeInTheDocument();
    expect(screen.getByRole("docker-add-button")).toBeInTheDocument();
});
