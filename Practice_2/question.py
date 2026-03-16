import ast


class Question:
    def __init__(self, user_answer = "null", text_question = "null", text_of_correct = "null"):
        self.user_answer = user_answer
        self.text_question = text_question
        self.text_of_correct = text_of_correct

    def get_question(self, id):
        with open("data.py", "r") as data:
            array = ast.literal_eval(data.read())
        self.text_question = array[id].get("QT")
        print(self.text_question)

    def get_answer(self, id):
        with open("data.py", "r") as data:
            array = ast.literal_eval(data.read())
        self.text_of_correct = array[id].get("Ans")
    
    def set_user_answer(self, answer):
        self.user_answer = answer

    
    def check(self):
        if(self.text_of_correct == self.user_answer): return 1
        else: return 0
