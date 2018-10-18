import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;

public class Main {
    public static void main(String[] args) {
        Humanoid mage = new Humanoid(new Date(), new Dimensions(2, 1, 1), 5, "Bruce",
                "Mage Guild", new ArrayList<>(Arrays.asList("Staff of Shamalama")),
                "Common Toungue");

        Humanoid swordsman = new Humanoid(new Date(), new Dimensions(2, 2, 2), 15, "Sir Mustachio",
                "The Round Table", new ArrayList<>(Arrays.asList("Giant Sword", "Shield")),
                "Common Toungue");

        Humanoid archer = new Humanoid(new Date(), new Dimensions(1, 2, 4), 10, "Lilith",
                "Forest Kingdom", new ArrayList<>(Arrays.asList("Bow", "Dagger")),
                "Elvish");

        System.out.println(mage.getCreatedAt());
        System.out.println(archer.getDimensions().toString());
        System.out.println(swordsman.getHp());
        System.out.println(mage.getName());
        System.out.println(swordsman.getFaction());
        System.out.println(mage.getWeapons().get(0));
        System.out.println(archer.getLanguage());
        System.out.println(archer.greet());
        System.out.println(mage.takeDamage(mage.getName()));
        System.out.println(swordsman.destroy(swordsman.getName()));
    }
}
