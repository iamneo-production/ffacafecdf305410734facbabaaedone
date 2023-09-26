import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("renders_without_crashing", () => {
    render(<App />);
  });

  it("renders_the_first_question_and_options", () => {
    const { getByText } = render(<App />);

    const firstQuestion = getByText("What is the capital of France?");
    const optionParis = getByText("Paris");

    expect(firstQuestion).toBeInTheDocument();
    expect(optionParis).toBeInTheDocument();
  });

  it("progresses_to_the_second_question_after_selecting_an_answer_for_the_first_question", () => {
    const { getByText, queryByText } = render(<App />);
  
    // Select an answer for the first question
    const optionBerlin = getByText("Berlin");
    fireEvent.click(optionBerlin);
  
    // Verify that the second question is displayed
    const secondQuestion = getByText("Which planet is known as the Red Planet?");
    expect(secondQuestion).toBeInTheDocument();
  
    // Verify that the previous question and options are no longer visible
    const firstQuestion = queryByText("What is the capital of France?");
    const optionParis = queryByText("Paris");
    expect(firstQuestion).not.toBeInTheDocument();
    expect(optionParis).not.toBeInTheDocument();
  });
  
  it("progresses_to_the_third_question_after_selecting_an_answer_for_the_second_question", () => {
    const { getByText, queryByText } = render(<App />);
  
    // Select an answer for the first question
    const optionBerlin = getByText("Berlin");
    fireEvent.click(optionBerlin);
  
    // Select an answer for the second question
    const optionMars = getByText("Mars");
    fireEvent.click(optionMars);
  
    // Verify that the third question is displayed
    const thirdQuestion = getByText("Who painted the Mona Lisa?");
    expect(thirdQuestion).toBeInTheDocument();
  
    // Verify that the previous question and options are no longer visible
    const secondQuestion = queryByText("Which planet is known as the Red Planet?");
    const optionMarsAgain = queryByText("Mars");
    expect(secondQuestion).not.toBeInTheDocument();
    expect(optionMarsAgain).not.toBeInTheDocument();
  });
  
  it("progresses_to_the_fourth_question_after_selecting_an_answer_for_the_third_question", () => {
    const { getByText, queryByText } = render(<App />);
  
    // Select answers for the first two questions
    const optionBerlin = getByText("Berlin");
    fireEvent.click(optionBerlin);
  
    const optionMars = getByText("Mars");
    fireEvent.click(optionMars);
  
    // Select an answer for the third question
    const optionDaVinci = getByText("Leonardo da Vinci");
    fireEvent.click(optionDaVinci);
  
    // Verify that the fourth question is displayed
    const fourthQuestion = getByText("What is the largest mammal?");
    expect(fourthQuestion).toBeInTheDocument();
  
    // Verify that the previous questions and options are no longer visible
    const thirdQuestion = queryByText("Who painted the Mona Lisa?");
    const optionDaVinciAgain = queryByText("Leonardo da Vinci");
    expect(thirdQuestion).not.toBeInTheDocument();
    expect(optionDaVinciAgain).not.toBeInTheDocument();
  });
  
  it("progresses_to_the_fifth_question_after_selecting_an_answer_for_the_fourth_question", () => {
    const { getByText, queryByText } = render(<App />);
  
    // Select answers for the first three questions
    const optionBerlin = getByText("Berlin");
    fireEvent.click(optionBerlin);
  
    const optionMars = getByText("Mars");
    fireEvent.click(optionMars);
  
    const optionDaVinci = getByText("Leonardo da Vinci");
    fireEvent.click(optionDaVinci);
  
    // Select an answer for the fourth question
    const optionBlueWhale = getByText("Blue Whale");
    fireEvent.click(optionBlueWhale);
  
    // Verify that the fifth question is displayed
    const fifthQuestion = getByText(
      "Which gas do plants use for photosynthesis?"
    );
    expect(fifthQuestion).toBeInTheDocument();
  
    // Verify that the previous questions and options are no longer visible
    const fourthQuestion = queryByText("What is the largest mammal?");
    const optionBlueWhaleAgain = queryByText("Blue Whale");
    expect(fourthQuestion).not.toBeInTheDocument();
    expect(optionBlueWhaleAgain).not.toBeInTheDocument();
  });
  

  describe("For first Question",()=>{
    it("when_user_chooses_the_option_correctly", () => {
      const { getByText, queryByText } = render(<App />);
  
      // Answer the questions
      const optionParis = getByText("Paris");
      fireEvent.click(optionParis);
  
      const optionMars = getByText("Mars");
      fireEvent.click(optionMars);
  
      const optionDaVinci = getByText("Leonardo da Vinci");
      fireEvent.click(optionDaVinci);
  
      const optionBlueWhale = getByText("Blue Whale");
      fireEvent.click(optionBlueWhale);
  
      const optionCarbonDioxide = getByText("Carbon Dioxide");
      fireEvent.click(optionCarbonDioxide);
  
      // Verify that the completed message is displayed
      const completedMessage = getByText("Completed!");
      expect(completedMessage).toBeInTheDocument();
  
      // Verify that the score is displayed
      const scoreMessage = getByText("Your score: 5/5");
      expect(scoreMessage).toBeInTheDocument();
  
      // Verify individual answers are marked as correct
      const answer1 = getByText("Question 1: Correct");
      expect(answer1).toBeInTheDocument();
  
      const answer2 = getByText("Question 2: Correct");
      expect(answer2).toBeInTheDocument();
  
      const answer3 = getByText("Question 3: Correct");
      expect(answer3).toBeInTheDocument();
  
      const answer4 = getByText("Question 4: Correct");
      expect(answer4).toBeInTheDocument();
  
      const answer5 = getByText("Question 5: Correct");
      expect(answer5).toBeInTheDocument();
  
      // Verify that the previous questions and options are no longer visible
      const firstQuestion = queryByText("What is the capital of France?");
      expect(firstQuestion).not.toBeInTheDocument();
    });
    it("when_user_chooses_the_option_incorrectly", () => {
      const { getByText, queryByText } = render(<App />);
  
      // Answer the questions
      const optionParis = getByText("London");
      fireEvent.click(optionParis);
  
      const optionMars = getByText("Mars");
      fireEvent.click(optionMars);
  
      const optionDaVinci = getByText("Leonardo da Vinci");
      fireEvent.click(optionDaVinci);
  
      const optionBlueWhale = getByText("Blue Whale");
      fireEvent.click(optionBlueWhale);
  
      const optionCarbonDioxide = getByText("Carbon Dioxide");
      fireEvent.click(optionCarbonDioxide);
  
      // Verify that the completed message is displayed
      const completedMessage = getByText("Completed!");
      expect(completedMessage).toBeInTheDocument();
  
      // Verify that the score is displayed
      const scoreMessage = getByText("Your score: 4/5");
      expect(scoreMessage).toBeInTheDocument();
  
      // Verify individual answers are marked as correct
      const answer1 = getByText("Question 1: Incorrect");
      expect(answer1).toBeInTheDocument();
  
      const answer2 = getByText("Question 2: Correct");
      expect(answer2).toBeInTheDocument();
  
      const answer3 = getByText("Question 3: Correct");
      expect(answer3).toBeInTheDocument();
  
      const answer4 = getByText("Question 4: Correct");
      expect(answer4).toBeInTheDocument();
  
      const answer5 = getByText("Question 5: Correct");
      expect(answer5).toBeInTheDocument();
  
      // Verify that the previous questions and options are no longer visible
      const firstQuestion = queryByText("What is the capital of France?");
      expect(firstQuestion).not.toBeInTheDocument();
    });
    it("when_user_chooses_the_option_incorrectly", () => {
      const { getByText, queryByText } = render(<App />);
  
      // Answer the questions
      const optionParis = getByText("Berlin");
      fireEvent.click(optionParis);
  
      const optionMars = getByText("Mars");
      fireEvent.click(optionMars);
  
      const optionDaVinci = getByText("Leonardo da Vinci");
      fireEvent.click(optionDaVinci);
  
      const optionBlueWhale = getByText("Blue Whale");
      fireEvent.click(optionBlueWhale);
  
      const optionCarbonDioxide = getByText("Carbon Dioxide");
      fireEvent.click(optionCarbonDioxide);
  
      // Verify that the completed message is displayed
      const completedMessage = getByText("Completed!");
      expect(completedMessage).toBeInTheDocument();
  
      // Verify that the score is displayed
      const scoreMessage = getByText("Your score: 4/5");
      expect(scoreMessage).toBeInTheDocument();
  
      // Verify individual answers are marked as correct
      const answer1 = getByText("Question 1: Incorrect");
      expect(answer1).toBeInTheDocument();
  
      const answer2 = getByText("Question 2: Correct");
      expect(answer2).toBeInTheDocument();
  
      const answer3 = getByText("Question 3: Correct");
      expect(answer3).toBeInTheDocument();
  
      const answer4 = getByText("Question 4: Correct");
      expect(answer4).toBeInTheDocument();
  
      const answer5 = getByText("Question 5: Correct");
      expect(answer5).toBeInTheDocument();
  
      // Verify that the previous questions and options are no longer visible
      const firstQuestion = queryByText("What is the capital of France?");
      expect(firstQuestion).not.toBeInTheDocument();
    });
    it("when_user_chooses_the_option_incorrectly", () => {
      const { getByText, queryByText } = render(<App />);
  
      // Answer the questions
      const optionParis = getByText("Madrid");
      fireEvent.click(optionParis);
  
      const optionMars = getByText("Mars");
      fireEvent.click(optionMars);
  
      const optionDaVinci = getByText("Leonardo da Vinci");
      fireEvent.click(optionDaVinci);
  
      const optionBlueWhale = getByText("Blue Whale");
      fireEvent.click(optionBlueWhale);
  
      const optionCarbonDioxide = getByText("Carbon Dioxide");
      fireEvent.click(optionCarbonDioxide);
  
      // Verify that the completed message is displayed
      const completedMessage = getByText("Completed!");
      expect(completedMessage).toBeInTheDocument();
  
      // Verify that the score is displayed
      const scoreMessage = getByText("Your score: 4/5");
      expect(scoreMessage).toBeInTheDocument();
  
      // Verify individual answers are marked as correct
      const answer1 = getByText("Question 1: Incorrect");
      expect(answer1).toBeInTheDocument();
  
      const answer2 = getByText("Question 2: Correct");
      expect(answer2).toBeInTheDocument();
  
      const answer3 = getByText("Question 3: Correct");
      expect(answer3).toBeInTheDocument();
  
      const answer4 = getByText("Question 4: Correct");
      expect(answer4).toBeInTheDocument();
  
      const answer5 = getByText("Question 5: Correct");
      expect(answer5).toBeInTheDocument();
  
      // Verify that the previous questions and options are no longer visible
      const firstQuestion = queryByText("What is the capital of France?");
      expect(firstQuestion).not.toBeInTheDocument();
    });
  })

  describe("For Second Question",()=>{
 
    it("when_user_chooses_the_option_incorrectly", () => {
      const { getByText, queryByText } = render(<App />);
  
      // Answer the questions
      const optionParis = getByText("Paris");
      fireEvent.click(optionParis);
  
      const optionMars = getByText("Jupiter");
      fireEvent.click(optionMars);
  
      const optionDaVinci = getByText("Leonardo da Vinci");
      fireEvent.click(optionDaVinci);
  
      const optionBlueWhale = getByText("Blue Whale");
      fireEvent.click(optionBlueWhale);
  
      const optionCarbonDioxide = getByText("Carbon Dioxide");
      fireEvent.click(optionCarbonDioxide);
  
      // Verify that the completed message is displayed
      const completedMessage = getByText("Completed!");
      expect(completedMessage).toBeInTheDocument();
  
      // Verify that the score is displayed
      const scoreMessage = getByText("Your score: 4/5");
      expect(scoreMessage).toBeInTheDocument();
  
      // Verify individual answers are marked as correct
      const answer1 = getByText("Question 1: Correct");
      expect(answer1).toBeInTheDocument();
  
      const answer2 = getByText("Question 2: Incorrect");
      expect(answer2).toBeInTheDocument();
  
      const answer3 = getByText("Question 3: Correct");
      expect(answer3).toBeInTheDocument();
  
      const answer4 = getByText("Question 4: Correct");
      expect(answer4).toBeInTheDocument();
  
      const answer5 = getByText("Question 5: Correct");
      expect(answer5).toBeInTheDocument();
  
      // Verify that the previous questions and options are no longer visible
      const firstQuestion = queryByText("What is the capital of France?");
      expect(firstQuestion).not.toBeInTheDocument();
    });
    it("when_user_chooses_the_option_incorrectly", () => {
      const { getByText, queryByText } = render(<App />);
  
      // Answer the questions
      const optionParis = getByText("Paris");
      fireEvent.click(optionParis);
  
      const optionMars = getByText("Venus");
      fireEvent.click(optionMars);
  
      const optionDaVinci = getByText("Leonardo da Vinci");
      fireEvent.click(optionDaVinci);
  
      const optionBlueWhale = getByText("Blue Whale");
      fireEvent.click(optionBlueWhale);
  
      const optionCarbonDioxide = getByText("Carbon Dioxide");
      fireEvent.click(optionCarbonDioxide);
  
      // Verify that the completed message is displayed
      const completedMessage = getByText("Completed!");
      expect(completedMessage).toBeInTheDocument();
  
      // Verify that the score is displayed
      const scoreMessage = getByText("Your score: 4/5");
      expect(scoreMessage).toBeInTheDocument();
  
      // Verify individual answers are marked as correct
      const answer1 = getByText("Question 1: Correct");
      expect(answer1).toBeInTheDocument();
  
      const answer2 = getByText("Question 2: Incorrect");
      expect(answer2).toBeInTheDocument();
  
      const answer3 = getByText("Question 3: Correct");
      expect(answer3).toBeInTheDocument();
  
      const answer4 = getByText("Question 4: Correct");
      expect(answer4).toBeInTheDocument();
  
      const answer5 = getByText("Question 5: Correct");
      expect(answer5).toBeInTheDocument();
  
      // Verify that the previous questions and options are no longer visible
      const firstQuestion = queryByText("What is the capital of France?");
      expect(firstQuestion).not.toBeInTheDocument();
    });
    it("when_user_chooses_the_option_incorrectly", () => {
      const { getByText, queryByText } = render(<App />);
  
      // Answer the questions
      const optionParis = getByText("Paris");
      fireEvent.click(optionParis);
  
      const optionMars = getByText("Mercury");
      fireEvent.click(optionMars);
  
      const optionDaVinci = getByText("Leonardo da Vinci");
      fireEvent.click(optionDaVinci);
  
      const optionBlueWhale = getByText("Blue Whale");
      fireEvent.click(optionBlueWhale);
  
      const optionCarbonDioxide = getByText("Carbon Dioxide");
      fireEvent.click(optionCarbonDioxide);
  
      // Verify that the completed message is displayed
      const completedMessage = getByText("Completed!");
      expect(completedMessage).toBeInTheDocument();
  
      // Verify that the score is displayed
      const scoreMessage = getByText("Your score: 4/5");
      expect(scoreMessage).toBeInTheDocument();
  
      // Verify individual answers are marked as correct
      const answer1 = getByText("Question 1: Correct");
      expect(answer1).toBeInTheDocument();
  
      const answer2 = getByText("Question 2: Incorrect");
      expect(answer2).toBeInTheDocument();
  
      const answer3 = getByText("Question 3: Correct");
      expect(answer3).toBeInTheDocument();
  
      const answer4 = getByText("Question 4: Correct");
      expect(answer4).toBeInTheDocument();
  
      const answer5 = getByText("Question 5: Correct");
      expect(answer5).toBeInTheDocument();
  
      // Verify that the previous questions and options are no longer visible
      const firstQuestion = queryByText("What is the capital of France?");
      expect(firstQuestion).not.toBeInTheDocument();
    });
  })
  describe("For Third Question",()=>{
 
    it("when_user_chooses_the_option_incorrectly", () => {
      const { getByText, queryByText } = render(<App />);
  
      // Answer the questions
      const optionParis = getByText("Paris");
      fireEvent.click(optionParis);
  
      const optionMars = getByText("Mars");
      fireEvent.click(optionMars);
  
      const optionDaVinci = getByText("Vincent van Gogh");
      fireEvent.click(optionDaVinci);
  
      const optionBlueWhale = getByText("Blue Whale");
      fireEvent.click(optionBlueWhale);
  
      const optionCarbonDioxide = getByText("Carbon Dioxide");
      fireEvent.click(optionCarbonDioxide);
  
      // Verify that the completed message is displayed
      const completedMessage = getByText("Completed!");
      expect(completedMessage).toBeInTheDocument();
  
      // Verify that the score is displayed
      const scoreMessage = getByText("Your score: 4/5");
      expect(scoreMessage).toBeInTheDocument();
  
      // Verify individual answers are marked as correct
      const answer1 = getByText("Question 1: Correct");
      expect(answer1).toBeInTheDocument();
  
      const answer2 = getByText("Question 2: Correct");
      expect(answer2).toBeInTheDocument();
  
      const answer3 = getByText("Question 3: Incorrect");
      expect(answer3).toBeInTheDocument();
  
      const answer4 = getByText("Question 4: Correct");
      expect(answer4).toBeInTheDocument();
  
      const answer5 = getByText("Question 5: Correct");
      expect(answer5).toBeInTheDocument();
  
      // Verify that the previous questions and options are no longer visible
      const firstQuestion = queryByText("What is the capital of France?");
      expect(firstQuestion).not.toBeInTheDocument();
    });
    it("when_user_chooses_the_option_incorrectly", () => {
      const { getByText, queryByText } = render(<App />);
  
      // Answer the questions
      const optionParis = getByText("Paris");
      fireEvent.click(optionParis);
  
      const optionMars = getByText("Mars");
      fireEvent.click(optionMars);
  
      const optionDaVinci = getByText("Pablo Picasso");
      fireEvent.click(optionDaVinci);
  
      const optionBlueWhale = getByText("Blue Whale");
      fireEvent.click(optionBlueWhale);
  
      const optionCarbonDioxide = getByText("Carbon Dioxide");
      fireEvent.click(optionCarbonDioxide);
  
      // Verify that the completed message is displayed
      const completedMessage = getByText("Completed!");
      expect(completedMessage).toBeInTheDocument();
  
      // Verify that the score is displayed
      const scoreMessage = getByText("Your score: 4/5");
      expect(scoreMessage).toBeInTheDocument();
  
      // Verify individual answers are marked as correct
      const answer1 = getByText("Question 1: Correct");
      expect(answer1).toBeInTheDocument();
  
      const answer2 = getByText("Question 2: Correct");
      expect(answer2).toBeInTheDocument();
  
      const answer3 = getByText("Question 3: Incorrect");
      expect(answer3).toBeInTheDocument();
  
      const answer4 = getByText("Question 4: Correct");
      expect(answer4).toBeInTheDocument();
  
      const answer5 = getByText("Question 5: Correct");
      expect(answer5).toBeInTheDocument();
  
      // Verify that the previous questions and options are no longer visible
      const firstQuestion = queryByText("What is the capital of France?");
      expect(firstQuestion).not.toBeInTheDocument();
    });
    it("when_user_chooses_the_option_incorrectly", () => {
      const { getByText, queryByText } = render(<App />);
  
      // Answer the questions
      const optionParis = getByText("Paris");
      fireEvent.click(optionParis);
  
      const optionMars = getByText("Mars");
      fireEvent.click(optionMars);
  
      const optionDaVinci = getByText("Michelangelo");
      fireEvent.click(optionDaVinci);
  
      const optionBlueWhale = getByText("Blue Whale");
      fireEvent.click(optionBlueWhale);
  
      const optionCarbonDioxide = getByText("Carbon Dioxide");
      fireEvent.click(optionCarbonDioxide);
  
      // Verify that the completed message is displayed
      const completedMessage = getByText("Completed!");
      expect(completedMessage).toBeInTheDocument();
  
      // Verify that the score is displayed
      const scoreMessage = getByText("Your score: 4/5");
      expect(scoreMessage).toBeInTheDocument();
  
      // Verify individual answers are marked as correct
      const answer1 = getByText("Question 1: Correct");
      expect(answer1).toBeInTheDocument();
  
      const answer2 = getByText("Question 2: Correct");
      expect(answer2).toBeInTheDocument();
  
      const answer3 = getByText("Question 3: Incorrect");
      expect(answer3).toBeInTheDocument();
  
      const answer4 = getByText("Question 4: Correct");
      expect(answer4).toBeInTheDocument();
  
      const answer5 = getByText("Question 5: Correct");
      expect(answer5).toBeInTheDocument();
  
      // Verify that the previous questions and options are no longer visible
      const firstQuestion = queryByText("What is the capital of France?");
      expect(firstQuestion).not.toBeInTheDocument();
    });

  })
  describe("For Fourth Question",()=>{
   
    it("when_user_chooses_the_option_incorrectly", () => {
      const { getByText, queryByText } = render(<App />);
  
      // Answer the questions
      const optionParis = getByText("Paris");
      fireEvent.click(optionParis);
  
      const optionMars = getByText("Mars");
      fireEvent.click(optionMars);
  
      const optionDaVinci = getByText("Leonardo da Vinci");
      fireEvent.click(optionDaVinci);
  
      const optionBlueWhale = getByText("African Elephant");
      fireEvent.click(optionBlueWhale);
  
      const optionCarbonDioxide = getByText("Carbon Dioxide");
      fireEvent.click(optionCarbonDioxide);
  
      // Verify that the completed message is displayed
      const completedMessage = getByText("Completed!");
      expect(completedMessage).toBeInTheDocument();
  
      // Verify that the score is displayed
      const scoreMessage = getByText("Your score: 4/5");
      expect(scoreMessage).toBeInTheDocument();
  
      // Verify individual answers are marked as correct
      const answer1 = getByText("Question 1: Correct");
      expect(answer1).toBeInTheDocument();
  
      const answer2 = getByText("Question 2: Correct");
      expect(answer2).toBeInTheDocument();
  
      const answer3 = getByText("Question 3: Correct");
      expect(answer3).toBeInTheDocument();
  
      const answer4 = getByText("Question 4: Incorrect");
      expect(answer4).toBeInTheDocument();
  
      const answer5 = getByText("Question 5: Correct");
      expect(answer5).toBeInTheDocument();
  
      // Verify that the previous questions and options are no longer visible
      const firstQuestion = queryByText("What is the capital of France?");
      expect(firstQuestion).not.toBeInTheDocument();
    });
    it("when_user_chooses_the_option_incorrectly", () => {
      const { getByText, queryByText } = render(<App />);
  
      // Answer the questions
      const optionParis = getByText("Paris");
      fireEvent.click(optionParis);
  
      const optionMars = getByText("Mars");
      fireEvent.click(optionMars);
  
      const optionDaVinci = getByText("Leonardo da Vinci");
      fireEvent.click(optionDaVinci);
  
      const optionBlueWhale = getByText("Giraffe");
      fireEvent.click(optionBlueWhale);
  
      const optionCarbonDioxide = getByText("Carbon Dioxide");
      fireEvent.click(optionCarbonDioxide);
  
      // Verify that the completed message is displayed
      const completedMessage = getByText("Completed!");
      expect(completedMessage).toBeInTheDocument();
  
      // Verify that the score is displayed
      const scoreMessage = getByText("Your score: 4/5");
      expect(scoreMessage).toBeInTheDocument();
  
      // Verify individual answers are marked as correct
      const answer1 = getByText("Question 1: Correct");
      expect(answer1).toBeInTheDocument();
  
      const answer2 = getByText("Question 2: Correct");
      expect(answer2).toBeInTheDocument();
  
      const answer3 = getByText("Question 3: Correct");
      expect(answer3).toBeInTheDocument();
  
      const answer4 = getByText("Question 4: Incorrect");
      expect(answer4).toBeInTheDocument();
  
      const answer5 = getByText("Question 5: Correct");
      expect(answer5).toBeInTheDocument();
  
      // Verify that the previous questions and options are no longer visible
      const firstQuestion = queryByText("What is the capital of France?");
      expect(firstQuestion).not.toBeInTheDocument();
    });
    it("when_user_chooses_the_option_incorrectly", () => {
      const { getByText, queryByText } = render(<App />);
  
      // Answer the questions
      const optionParis = getByText("Paris");
      fireEvent.click(optionParis);
  
      const optionMars = getByText("Mars");
      fireEvent.click(optionMars);
  
      const optionDaVinci = getByText("Leonardo da Vinci");
      fireEvent.click(optionDaVinci);
  
      const optionBlueWhale = getByText("Hippopotamus");
      fireEvent.click(optionBlueWhale);
  
      const optionCarbonDioxide = getByText("Carbon Dioxide");
      fireEvent.click(optionCarbonDioxide);
  
      // Verify that the completed message is displayed
      const completedMessage = getByText("Completed!");
      expect(completedMessage).toBeInTheDocument();
  
      // Verify that the score is displayed
      const scoreMessage = getByText("Your score: 4/5");
      expect(scoreMessage).toBeInTheDocument();
  
      // Verify individual answers are marked as correct
      const answer1 = getByText("Question 1: Correct");
      expect(answer1).toBeInTheDocument();
  
      const answer2 = getByText("Question 2: Correct");
      expect(answer2).toBeInTheDocument();
  
      const answer3 = getByText("Question 3: Correct");
      expect(answer3).toBeInTheDocument();
  
      const answer4 = getByText("Question 4: Incorrect");
      expect(answer4).toBeInTheDocument();
  
      const answer5 = getByText("Question 5: Correct");
      expect(answer5).toBeInTheDocument();
  
      // Verify that the previous questions and options are no longer visible
      const firstQuestion = queryByText("What is the capital of France?");
      expect(firstQuestion).not.toBeInTheDocument();
    });
  })
  describe("For Fifth Question",()=>{
   
    it("when_user_chooses_the_option_incorrectly", () => {
      const { getByText, queryByText } = render(<App />);
  
      // Answer the questions
      const optionParis = getByText("Paris");
      fireEvent.click(optionParis);
  
      const optionMars = getByText("Mars");
      fireEvent.click(optionMars);
  
      const optionDaVinci = getByText("Leonardo da Vinci");
      fireEvent.click(optionDaVinci);
  
      const optionBlueWhale = getByText("Blue Whale");
      fireEvent.click(optionBlueWhale);
  
      const optionCarbonDioxide = getByText("Oxygen");
      fireEvent.click(optionCarbonDioxide);
  
      // Verify that the completed message is displayed
      const completedMessage = getByText("Completed!");
      expect(completedMessage).toBeInTheDocument();
  
      // Verify that the score is displayed
      const scoreMessage = getByText("Your score: 4/5");
      expect(scoreMessage).toBeInTheDocument();
  
      // Verify individual answers are marked as correct
      const answer1 = getByText("Question 1: Correct");
      expect(answer1).toBeInTheDocument();
  
      const answer2 = getByText("Question 2: Correct");
      expect(answer2).toBeInTheDocument();
  
      const answer3 = getByText("Question 3: Correct");
      expect(answer3).toBeInTheDocument();
  
      const answer4 = getByText("Question 4: Correct");
      expect(answer4).toBeInTheDocument();
  
      const answer5 = getByText("Question 5: Incorrect");
      expect(answer5).toBeInTheDocument();
  
      // Verify that the previous questions and options are no longer visible
      const firstQuestion = queryByText("What is the capital of France?");
      expect(firstQuestion).not.toBeInTheDocument();
    });
    it("when_user_chooses_the_option_incorrectly", () => {
      const { getByText, queryByText } = render(<App />);
  
      // Answer the questions
      const optionParis = getByText("Paris");
      fireEvent.click(optionParis);
  
      const optionMars = getByText("Mars");
      fireEvent.click(optionMars);
  
      const optionDaVinci = getByText("Leonardo da Vinci");
      fireEvent.click(optionDaVinci);
  
      const optionBlueWhale = getByText("Blue Whale");
      fireEvent.click(optionBlueWhale);
  
      const optionCarbonDioxide = getByText("Nitrogen");
      fireEvent.click(optionCarbonDioxide);
  
      // Verify that the completed message is displayed
      const completedMessage = getByText("Completed!");
      expect(completedMessage).toBeInTheDocument();
  
      // Verify that the score is displayed
      const scoreMessage = getByText("Your score: 4/5");
      expect(scoreMessage).toBeInTheDocument();
  
      // Verify individual answers are marked as correct
      const answer1 = getByText("Question 1: Correct");
      expect(answer1).toBeInTheDocument();
  
      const answer2 = getByText("Question 2: Correct");
      expect(answer2).toBeInTheDocument();
  
      const answer3 = getByText("Question 3: Correct");
      expect(answer3).toBeInTheDocument();
  
      const answer4 = getByText("Question 4: Correct");
      expect(answer4).toBeInTheDocument();
  
      const answer5 = getByText("Question 5: Incorrect");
      expect(answer5).toBeInTheDocument();
  
      // Verify that the previous questions and options are no longer visible
      const firstQuestion = queryByText("What is the capital of France?");
      expect(firstQuestion).not.toBeInTheDocument();
    });
   
    it("when_user_chooses_the_option_incorrectly", () => {
      const { getByText, queryByText } = render(<App />);
  
      // Answer the questions
      const optionParis = getByText("Paris");
      fireEvent.click(optionParis);
  
      const optionMars = getByText("Mars");
      fireEvent.click(optionMars);
  
      const optionDaVinci = getByText("Leonardo da Vinci");
      fireEvent.click(optionDaVinci);
  
      const optionBlueWhale = getByText("Blue Whale");
      fireEvent.click(optionBlueWhale);
  
      const optionCarbonDioxide = getByText("Hydrogen");
      fireEvent.click(optionCarbonDioxide);
  
      // Verify that the completed message is displayed
      const completedMessage = getByText("Completed!");
      expect(completedMessage).toBeInTheDocument();
  
      // Verify that the score is displayed
      const scoreMessage = getByText("Your score: 4/5");
      expect(scoreMessage).toBeInTheDocument();
  
      // Verify individual answers are marked as correct
      const answer1 = getByText("Question 1: Correct");
      expect(answer1).toBeInTheDocument();
  
      const answer2 = getByText("Question 2: Correct");
      expect(answer2).toBeInTheDocument();
  
      const answer3 = getByText("Question 3: Correct");
      expect(answer3).toBeInTheDocument();
  
      const answer4 = getByText("Question 4: Correct");
      expect(answer4).toBeInTheDocument();
  
      const answer5 = getByText("Question 5: Incorrect");
      expect(answer5).toBeInTheDocument();
  
      // Verify that the previous questions and options are no longer visible
      const firstQuestion = queryByText("What is the capital of France?");
      expect(firstQuestion).not.toBeInTheDocument();
    });
  })
});
