import java.util.Date;

public abstract class GameObject {
    /*****************************************************************
     *************************** Variables ***************************
     *****************************************************************/
    private Date createdAt;
    private Dimensions dimensions;

    /*****************************************************************
     **************************** Methods ****************************
     *****************************************************************/
    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public void setDimensions(Dimensions dimensions) {
        this.dimensions = dimensions;
    }

    public Date getCreatedAt(){
        return this.createdAt;
    }

    public Dimensions getDimensions(){
        return this.dimensions;
    }

    public String destroy(String name){
        return name + "was removed from game.";
    }
}
