package controllers;

import com.fasterxml.jackson.databind.JsonNode;
import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import db.LibraryManager;
import db.WestministerLibraryManager;
import org.bson.Document;
import org.mongodb.morphia.Datastore;
import org.mongodb.morphia.Morphia;
import play.libs.Json;
import play.mvc.*;

import java.util.ArrayList;
import java.util.List;

/**
 * This controller contains an action to handle HTTP requests
 * to the application's home page.
 */
public class HomeController extends Controller {
    final static MongoClient client = new MongoClient();
    final static MongoDatabase recievedBooks = client.getDatabase("booksdb");


    /**
     * An action that renders an HTML page with a welcome message.
     * The configuration in the <code>routes</code> file means that
     * this method will be called when the application receives a
     * <code>GET</code> request with a path of <code>/</code>.
     */
    public Result index() {
        MongoClient client= new MongoClient("localhost", 27017);
            Morphia morphia= new Morphia();
            Datastore db= morphia.createDatastore(client, "booksdb");


        return ok("successful");


    }

//    method Pbook is connected to the routes to get data from the front,
//    and the object of WestministerLibraryManager which implements LibraryManger interface in called to get its functionalities
    public Result Pbook(){
        LibraryManager libMan= new WestministerLibraryManager();
        libMan.adddBook(request().body().asJson());
        String pp="post book works";
        return ok(Json.toJson(pp));
    }

    //    method Pdvd is connected to the routes to get data from the front,
//    and the object of WestministerLibraryManager which implements LibraryManger interface in called to get its functionalities
    public Result Pdvd(){
        LibraryManager libMan= new WestministerLibraryManager();
        libMan.adddDvd(request().body().asJson());
        String pp="post dvd works";
        return ok(Json.toJson(pp));
    }

    //    method gbook is connected to the routes to send data to the front,
    public Result gbook(){
        MongoCollection<Document> bookCollection = recievedBooks.getCollection("books");
        ArrayList<Document> listOfBook = bookCollection.find().into(new ArrayList<>());
        List<Document> bookss = new ArrayList<Document>();
        bookss.addAll(listOfBook);
                JsonNode jbook = Json.toJson(bookss);
        System.out.println(jbook);
        return ok(jbook);

    }

    //    method deleteDvd is connected to the routes to delete data from the databse,
    public Result deleteBook(String isbn){
        MongoCollection<Document> bookCollection = recievedBooks.getCollection("books");
        Document booksdocument = new Document("$eq", isbn);
        Document deletedocument = new Document("ISBN", booksdocument);
        bookCollection.deleteOne(deletedocument);
        return ok("Got this book deleted");
    }

    //    method deleteDvd is connected to the routes to delete data from the databse,
    public Result deleteDvd(String title){
        MongoCollection<Document> dvdCollection = recievedBooks.getCollection("dvds");
        Document dvdsdocument = new Document("$eq", title);
        Document deletedocument = new Document("title", dvdsdocument);
        dvdCollection.deleteOne(deletedocument);
        return ok("Got this dvd deleted");
    }

    //    method gdvd is connected to the routes to send data to the front,
    public Result gdvd(){
        MongoCollection<Document> dvdCollection = recievedBooks.getCollection("dvds");
        ArrayList<Document> listOfdvd = dvdCollection.find().into(new ArrayList<>());
        List<Document> dvds = new ArrayList<Document>();
        dvds.addAll(listOfdvd);
        JsonNode jdvd = Json.toJson(dvds);
        System.out.println(jdvd);
        return ok(jdvd);

    }



}
