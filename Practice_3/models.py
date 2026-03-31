class Book:
    def __init__(self, title, author, book_id, is_available):
        self.title = title
        self.author = author
        self.book_id = book_id
        self.is_available = is_available

    def borrow_book(self):
        return f"You take {self.title}"

    def return_book(self):
        return self.__str__()

    def __str__(self):
        return f"Book({self.title}, {self.author}, {self.book_id}, {self.is_available})"


class EBook(Book):
    def __init__(self, title, author, book_id, is_available, file, size, format_book):
        super().__init__(title, author, book_id, is_available)
        self.file = file
        self.size = size
        self.format_book = format_book

    def borrow_book(self):
        return f"You take {self.title}"

    def return_book(self):
        return f"You return {self.title}"

    def get_size(self):
        return self.size

    def __str__(self):
        return f"EBook({self.title}, {self.author}, {self.book_id}, {self.is_available})"


class PrintedBook(Book):
    def __init__(self, title, author, book_id, is_available, pages, weigth):
        super().__init__(title, author, book_id, is_available)
        self.pages = pages
        self.weigth = weigth

    def borrow_book(self):
        return f"You take {self.title}"

    def return_book(self):
        return f"You return {self.title}"

    def flip_page(self):
        return "You flipped a page!"

    def __str__(self):
        return f"PrintedBook({self.title}, {self.author}, {self.book_id}, {self.is_available})"