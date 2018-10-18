import java.util.ArrayList;
import java.util.Date;

public class Humanoid extends CharacterStats {
    /*****************************************************************
     *************************** Variables ***************************
     *****************************************************************/
    private String faction;
    private ArrayList<String> weapons;
    private String language;

    /*****************************************************************
     ************************** Constructor **************************
     *****************************************************************/
    public Humanoid(Date date, Dimensions dimns, int hp, String name, String fctn, ArrayList<String> wpns, String lang ){
        setCreatedAt(date);
        setDimensions(dimns);
        setHp(hp);
        setName(name);
        setFaction(fctn);
        setWeapons(wpns);
        setLanguage(lang);
    }

    /*****************************************************************
     **************************** Methods ****************************
     *****************************************************************/
    public void setFaction(String fctn){
        this.faction = fctn;
    }

    public void setWeapons(ArrayList<String> wpns){
        this.weapons = wpns;
    }

    public void setLanguage(String lang){
        this.language = lang;
    }

    public String getFaction(){
        return this.faction;
    }

    public ArrayList<String> getWeapons(){
        return this.weapons;
    }

    public String getLanguage(){
        return this.language;
    }

    public String greet(){
        return getName() + " offers a greeting in " + getLanguage();
    }
}
