package controllers;


public class user  {

    private String isbn;
    private String title;
    private String author;
    private String pagenumber;
    private String date;


    public user(String isbn, String title, String author, String pagenumber, String date) {
        super();
        this.isbn = isbn;
        this.title = title;
        this.author= author;
        this.pagenumber = pagenumber;
        this.date=date;
    }

    public String getIsbn() {

        return isbn;
    }

    public void setIsbn(String isbn) {

        this.isbn = isbn;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {

        this.title = title;
    }

    public String getAuthor() {

        return author;
    }

    public void setAuthor(String author) {

        this.author = author;
    }

    public String getDate() {

        return date;
    }

    public void setDate(String date) {

        this.date = date;
    }

    public String getPagenumber() {

        return pagenumber;
    }

    public void setPagenumber(String pagenumber)
    {

        this.pagenumber = pagenumber;
    }
}