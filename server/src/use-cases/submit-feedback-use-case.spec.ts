import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

// spies = espiões

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

describe("Submit feedback", () => {
  const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy }
  );

  it("should be able to submit a feedback", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "exmaple comment",
        screenshot: "data:image/png:base64,asopdj-1i24j12",
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it("should not be able to submit feedback without type", async () => {
    await expect(
      submitFeedback.execute({
        type: "",
        comment: "exmaple comment",
        screenshot: "data:image/png:base64,asopdj-1i24j12",
      })
    ).rejects.toThrow();
  });

  it("should not be able to submit feedback without comment", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "",
        screenshot: "data:image/png:base64,asopdj-1i24j12",
      })
    ).rejects.toThrow();
  });

  it("should not be able to submit feedback with an invalid screeshot", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "exmaple comment",
        screenshot: "test.jpg",
      })
    ).rejects.toThrow();
  });
});
