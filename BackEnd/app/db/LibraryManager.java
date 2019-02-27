package db;

import com.fasterxml.jackson.databind.JsonNode;
import org.bson.Document;

import java.util.List;

public interface LibraryManager {
    void adddBook(JsonNode json);
    void adddDvd (JsonNode json);
    void deleteBook (JsonNode json);
//    List<Document> getBook ();
}
