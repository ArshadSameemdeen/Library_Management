package db;

import org.mongodb.morphia.annotations.Id;
import org.mongodb.morphia.annotations.Property;

public class reader {

    @Id
    @Property
    public String id;
    @Property
    public String name;
    @Property
    public String mobileNumber;
    @Property
    public String email;


    public String getid() {
        return id;
    }

    public void setid(String id) {
        this.id = id;
    }

    public String getname() {
        return name;
    }

    public void setname(String name) {
        this.name = name;
    }

    public String getmobileNumber() {
        return mobileNumber;
    }

    public void setmobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    public String getemail() {
        return email;
    }

    public void setemail(String email) {
        this.email = email;
    }


}
