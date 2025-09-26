import java.util.*;

public class Pattern4 {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        int n = s.nextInt();
        for (int i = 0; i < n; i++) {
            int cval = 1;
            for (int j = 0; j < n; j++) {

                System.out.print(cval +" ");
                
                cval++;
            }
            
            System.out.println();
        }
    }

}
