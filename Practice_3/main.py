from models import Book, EBook, PrintedBook

def add_book():
    type_book = input("Write type: ")
    title = input("Write title: ")
    author = input("Write author: ")
    book_id = input("Write book id: ")
    is_available_input = input("Is available? y/n ")
    is_available = False
    if(is_available_input == "y"): is_available = True

    if(type_book == "EBook"):
        file = input("Write file: ")
        size = input("Write size: ")
        format_book = input("Write format: ")
        new_book = EBook(title, author, book_id, is_available, file, size, format_book)

    elif(type_book == "PrintedBook"):
        pages = input("Write pages: ")
        weigth = input("Write weigth: ")
        new_book = PrintedBook(title, author, book_id, is_available, pages, weigth)

    return new_book

def main():
    is_exit = False
    books = []

    print("==== Book System ====")
    print("\n1. Add Book\n2. View All Books\n3. Borrow Book\n4. Return Book\n5. Search Book by Title\n6. Exit")

    while(is_exit == False):
        status = int(input("Enter choice: "))

        match status:
            case 1:
                books.append(add_book())
                print("Book added successfully!")
            case 2:
                for book in books:
                    print(book)
            case 3:
                print("Server Error")
            case 4:
                print("Unknown Status")
            case 5:
                print("Unknown Status")
            case 6:
                is_exit = True
            case _:
                print("Unknown Status")
        


if __name__ == "__main__":
    main()