import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Welcome from "./welcome"

describe("Welcome component", () => {
  it("mostra il nome passato come prop", () => {
    render(<Welcome name="Federico" />)
    expect(screen.getByText(/Welcome/i)).toBeInTheDocument()
    expect(screen.getByText("Federico")).toBeInTheDocument()
  })

  it("mostra 'Anonimo' se non viene passato nessun nome", () => {
    render(<Welcome />)
    expect(screen.getByText("Anonimo")).toBeInTheDocument()
  })
})