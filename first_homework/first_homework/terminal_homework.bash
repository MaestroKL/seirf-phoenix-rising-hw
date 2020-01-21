Part I: 
Kevins-Mac-mini:~ maestrokl$ cd desktop
Kevins-Mac-mini:desktop maestrokl$ mkdir galaxy_far_far_away
Kevins-Mac-mini:desktop maestrokl$ cd galaxy_far_far_away
Kevins-Mac-mini:galaxy_far_far_away maestrokl$ mkdir death_star
Kevins-Mac-mini:galaxy_far_far_away maestrokl$ cd death_star
Kevins-Mac-mini:death_star maestrokl$ touch darth_vader.txt
Kevins-Mac-mini:death_star maestrokl$ touch princess_leia.txt
Kevins-Mac-mini:death_star maestrokl$ touch storm_trooper.txt
Kevins-Mac-mini:death_star maestrokl$ ls
darth_vader.txt		princess_leia.txt	storm_trooper.txt
Kevins-Mac-mini:death_star maestrokl$ mkdir tatooine
Kevins-Mac-mini:death_star maestrokl$ cd tatooine
Kevins-Mac-mini:tatooine maestrokl$ touch luke.txt
Kevins-Mac-mini:tatooine maestrokl$ touch ben_kenobi.txt
Kevins-Mac-mini:tatooine maestrokl$ mkdir millenium_falcon
Kevins-Mac-mini:tatooine maestrokl$ cd millenium_falcon
Kevins-Mac-mini:millenium_falcon maestrokl$ touch han_solo.txt
Kevins-Mac-mini:millenium_falcon maestrokl$ touch chewbaca.txt
Kevins-Mac-mini:millenium_falcon maestrokl$ ls
chewbaca.txt	han_solo.txt
Kevins-Mac-mini:millenium_falcon maestrokl$ 

Part II: (move)
Kevins-Mac-mini:millenium_falcon maestrokl$ cd ..
Kevins-Mac-mini:tatooine maestrokl$ ls
ben_kenobi.txt		luke.txt		millenium_falcon
Kevins-Mac-mini:tatooine maestrokl$ mv ben_kenobi.txt obi_wan.txt
Kevins-Mac-mini:tatooine maestrokl$ ls
luke.txt		millenium_falcon	obi_wan.txt

Part II: (copy)
Kevins-Mac-mini:death_star maestrokl$ cp storm_trooper.txt tatooine
Kevins-Mac-mini:death_star maestrokl$ cd tatooine
Kevins-Mac-mini:tatooine maestrokl$ ls
luke.txt		millenium_falcon	obi_wan.txt		storm_trooper.txt

Part IV: (move)
Kevins-Mac-mini:tatooine maestrokl$ mv obi_wan.txt  millenium_falcon
Kevins-Mac-mini:tatooine maestrokl$ mv luke.txt  millenium_falcon
Kevins-Mac-mini:tatooine maestrokl$ cd millenium_falcon
Kevins-Mac-mini:millenium_falcon maestrokl$ ls
chewbaca.txt	han_solo.txt	luke.txt	obi_wan.txt
 
Part V: (remove)
Kevins-Mac-mini:millenium_falcon maestrokl$ ls
chewbaca.txt	han_solo.txt	luke.txt	obi_wan.txt
Kevins-Mac-mini:millenium_falcon maestrokl$ rm obi_wan.txt
Kevins-Mac-mini:millenium_falcon maestrokl$ ls
chewbaca.txt	han_solo.txt	luke.txt

Part VI: (all together)
Kevins-Mac-mini:millenium_falcon maestrokl$ cd ~/desktop/galaxy_far_far_away
Kevins-Mac-mini:galaxy_far_far_away maestrokl$ ls
death_star
Kevins-Mac-mini:galaxy_far_far_away maestrokl$ mkdir yavin_4
Kevins-Mac-mini:galaxy_far_far_away maestrokl$ cd death_star 
Kevins-Mac-mini:death_star maestrokl$ ls
darth_vader.txt		princess_leia.txt	storm_trooper.txt	tatooine
Kevins-Mac-mini:death_star maestrokl$ cd tatooine
Kevins-Mac-mini:tatooine maestrokl$ ls
millenium_falcon	storm_trooper.txt
Kevins-Mac-mini:tatooine maestrokl$ mv millenium_falcon ~/desktop/galaxy_far_far_away/yavin_4
Kevins-Mac-mini:death_star maestrokl$ mv princess_leia.txt ~/desktop/galaxy_far_far_away/yavin_4/
Kevins-Mac-mini:yavin_4 maestrokl$ cd ~/desktop/galaxy_far_far_away/yavin_4/millenium_falcon
Kevins-Mac-mini:millenium_falcon maestrokl$ ls
chewbaca.txt	han_solo.txt	luke.txt
Kevins-Mac-mini:millenium_falcon maestrokl$ mv luke.txt ~/desktop/galaxy_far_far_away/yavin_4/x_wing
Kevins-Mac-mini:yavin_4 maestrokl$ mv millenium_falcon ~/desktop/galaxy_far_far_away
Kevins-Mac-mini:yavin_4 maestrokl$ ls
princess_leia.txt	x_wing
Kevins-Mac-mini:yavin_4 maestrokl$ cd x_wing
Kevins-Mac-mini:yavin_4 maestrokl$ mv x_wing ~/desktop/galaxy_far_far_away
Kevins-Mac-mini:yavin_4 maestrokl$ ls
princess_leia.txt
Kevins-Mac-mini:death_star maestrokl$ cd ~/Desktop/galaxy_far_far_away/death_star
Kevins-Mac-mini:death_star maestrokl$ mkdir tie_fighter_1
Kevins-Mac-mini:death_star maestrokl$ mkdir tie_fighter_2
Kevins-Mac-mini:death_star maestrokl$ mkdir tie_fighter_3
Kevins-Mac-mini:death_star maestrokl$ ls
darth_vader.txt		tatooine		tie_fighter_2
storm_trooper.txt	tie_fighter_1		tie_fighter_3
Kevins-Mac-mini:death_star maestrokl$ mv darth_vader.txt tie_fighter_1
Kevins-Mac-mini:death_star maestrokl$ ls
storm_trooper.txt	tie_fighter_1		tie_fighter_3
tatooine		tie_fighter_2
Kevins-Mac-mini:death_star maestrokl$ cp storm_trooper.txt tie_fighter_2
Kevins-Mac-mini:death_star maestrokl$ cp storm_trooper.txt tie_fighter_3
Kevins-Mac-mini:death_star maestrokl$ mv tie_fighter_1 ~/desktop/galaxy_far_far_away
Kevins-Mac-mini:death_star maestrokl$ mv tie_fighter_2 ~/desktop/galaxy_far_far_away
Kevins-Mac-mini:death_star maestrokl$ mv tie_fighter_3 ~/desktop/galaxy_far_far_away


Part VII: (Remove directory)
Kevins-Mac-mini:galaxy_far_far_away maestrokl$ rm -r tie_fighter_2
Kevins-Mac-mini:galaxy_far_far_away maestrokl$ ls
death_star		tie_fighter_1		x_wing
millenium_falcon	tie_fighter_3		yavin_4
Kevins-Mac-mini:galaxy_far_far_away maestrokl$ rm -r tie_fighter_3
Kevins-Mac-mini:galaxy_far_far_away maestrokl$ ls
death_star		tie_fighter_1		yavin_4
millenium_falcon	x_wing

Part VIII: (The Final Act)
/Users/maestrokl/Desktop/galaxy_far_far_away/x_wing
Kevins-Mac-mini:x_wing maestrokl$ cd ~/Desktop/galaxy_far_far_away/x_wing
Kevins-Mac-mini:x_wing maestrokl$ touch the_force.txt
Kevins-Mac-mini:x_wing maestrokl$ cd ~/Desktop/galaxy_far_far_away
Kevins-Mac-mini:galaxy_far_far_away maestrokl$ ls
death_star		tie_fighter_1		yavin_4
millenium_falcon	x_wing
Kevins-Mac-mini:galaxy_far_far_away maestrokl$ rm -r death_star
Kevins-Mac-mini:galaxy_far_far_away maestrokl$ mv x_wing yavin_4
Kevins-Mac-mini:galaxy_far_far_away maestrokl$ mv millenium_falcon yavin_4
Kevins-Mac-mini:galaxy_far_far_away maestrokl$ ls
tie_fighter_1	yavin_4
Kevins-Mac-mini:galaxy_far_far_away maestrokl$ cd yavin_4
Kevins-Mac-mini:yavin_4 maestrokl$ ls
millenium_falcon	princess_leia.txt	x_wing
Kevins-Mac-mini:yavin_4 maestrokl$ 