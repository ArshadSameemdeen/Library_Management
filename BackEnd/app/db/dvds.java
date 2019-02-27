package db;

import org.mongodb.morphia.annotations.Id;
import org.mongodb.morphia.annotations.Property;

public class dvds {


    @Property
    public String title;
    @Property
    public String actors ;
    @Property
    public String languages;
    @Property
    public String subtitles;
    @Property
    public String producer;

    public dvds( String title, String actors, String languages, String subtitles, String producer){
        this.title = title;
        this.actors = actors;
        this.languages = languages;
        this.subtitles = subtitles;
        this.producer = producer;
    }


    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getActors () {
        return actors ;
    }

    public void setActors (String actors ) {
        this.actors  = actors ;
    }

    public String getlanguages() {
        return languages;
    }

    public void setlanguages(String languages) {
        this.languages = languages;
    }

    public String getsubtitles() {
        return subtitles;
    }

    public void setSubtitles(String subtitles) {
        this.subtitles = subtitles;
    }

    public String getproducer() {
        return producer;
    }

    public void setproducer(String producer) {
        this.producer = producer;
    }
}
