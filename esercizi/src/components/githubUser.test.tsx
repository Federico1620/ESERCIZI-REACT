import { render, screen, waitFor } from "@testing-library/react";
import GithubUser from "./githubUser";

global.fetch = jest.fn();

describe("GithubUser component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("dovrebbe effettuare una chiamata fetch e mostrare i dati dell'utente", async () => {
    const fakeUser = {
      login: "riccardo",
      name: "Riccardo Cirella",
      avatar_url: "https://avatars.githubusercontent.com/u/123456",
    };

    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => fakeUser,
    });

    render(<GithubUser username="riccardo" />);

    await waitFor(() => expect(screen.getByText("Riccardo Cirella")).toBeInTheDocument());

    expect(screen.getByText("riccardo")).toBeInTheDocument();
    expect(screen.getByAltText("riccardo")).toHaveAttribute("src", fakeUser.avatar_url);

    expect(fetch).toHaveBeenCalledWith("https://api.github.com/users/riccardo");
  });

  it("non dovrebbe mostrare nulla se il fetch fallisce", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
    });

    render(<GithubUser username="utenteInesistente" />);

    await waitFor(() => {
      expect(screen.queryByRole("heading")).toBeNull();
    });
  });
});