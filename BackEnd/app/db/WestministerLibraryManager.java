package db;

import com.fasterxml.jackson.databind.JsonNode;
import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;
import org.mongodb.morphia.Datastore;
import org.mongodb.morphia.Morphia;

import java.util.ArrayList;
import java.util.List;

public class
WestministerLibraryManager implements LibraryManager {
    final static MongoClient client = new MongoClient();
    final static Morphia morphia = new Morphia();
    final static Datastore db = morphia.createDatastore(client, "booksdb");


//    adddBook is called to define the functionality to send data recieved from the front end to the database
    @Override
    public void adddBook(JsonNode json) {
        String ISBN = json.findPath("isbm").textValue();
        String title = json.findPath("title").textValue();

        String author = json.findPath("author").textValue();
        String publisher = json.findPath("publisher").textValue();
        String noofpages = json.findPath("pages").textValue();
        String date = json.findPath("date").textValue();
        System.out.println(json.asText());
//        Author authour = new Author(author);
        books book = new books(ISBN, title, author, publisher, noofpages, date);

        db.save(book);
    }

    //    adddDvd is called to define the functionality to send data recieved from the front end to the database
    @Override
    public void adddDvd(JsonNode json) {
        String title = json.findPath("title").textValue();

        String actors = json.findPath("actor").textValue();
        String languages = json.findPath("language").textValue();
        String subtitles = json.findPath("subtitles").textValue();
        String producer = json.findPath("producer").textValue();
        System.out.println(json.asText());
        dvds dvd = new dvds(title, actors, languages, subtitles, producer);

        db.save(dvd);
    }

    @Override
    public void deleteBook(JsonNode json) {

    }

}
