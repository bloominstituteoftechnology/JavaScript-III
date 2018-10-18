public abstract class CharacterStats extends GameObject {
    /*****************************************************************
     *************************** Variables ***************************
     *****************************************************************/
    private int hp;
    private String name;

    /*****************************************************************
     **************************** Methods ****************************
     *****************************************************************/
    public void setHp(int hp) {
        this.hp = hp;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getHp() {
        return hp;
    }

    public String getName() {
        return name;
    }

    public String takeDamage(String name){
        return name + "took damage";
    }
}
