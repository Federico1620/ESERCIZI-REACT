import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import UncontrolledLogin from "./uncontrolledLogin"

vi.spyOn(console, "log").mockImplementation(() => {})

describe("UncontrolledLogin component", () => {
  it("invia il form e mostra i valori inseriti nel log", () => {
    render(<UncontrolledLogin />)

    const emailInput = screen.getByLabelText(/Email/i)
    const passwordInput = screen.getByLabelText(/Password/i)
    const submitButton = screen.getByRole("button", { name: /login!/i })

    fireEvent.change(emailInput, { target: { value: "test@example.com" } })
    fireEvent.change(passwordInput, { target: { value: "12345" } })

    fireEvent.click(submitButton)

    expect(console.log).toHaveBeenCalledWith({
      email: "test@example.com",
      password: "12345",
    })
  })
})