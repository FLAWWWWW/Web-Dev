from question import Question

class Quiz:
    def __init__(self, score):
        self.score = score


q1 = Question()
q1.get_question(0)
q1.get_answer(0)

answer = input("Enter your answer: ")
q1.set_user_answer(answer)

if(q1.check()): print("Correct")
else: print("Incorrect")
