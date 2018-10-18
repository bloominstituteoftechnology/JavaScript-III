public class Dimensions {
    /*****************************************************************
     *************************** Variables ***************************
     *****************************************************************/
    private int length;
    private int width;
    private int height;

    /*****************************************************************
     ************************** Constructor **************************
     *****************************************************************/
    Dimensions(int l, int w, int h){
        setLength(l);
        setWidth(w);
        setHeight(h);
    }

    /*****************************************************************
     **************************** Methods ****************************
     *****************************************************************/

    public void setLength(int length) {
        this.length = length;
    }

    public void setWidth(int width) {
        this.width = width;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    public int getLength() {
        return this.length;
    }

    public int getWidth() {
        return this.width;
    }

    public int getHeight() {
        return this.height;
    }

    public String toString(){
        return "Length = " + getLength() + ", Width = " + getWidth() + ", Height = " + getHeight();
    }
}
