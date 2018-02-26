 const questions = ['Who is the main fighter of Street Fighter?',
                   'Who is Ryu’s friendly rival?',
                   'Which martial arts do Ryu and Ken practice?',
                   'Who is Ryu’s and Ken’s master?',
                   'What happened to Ryu’s and Ken’s master?',
                   'Who are disciples of Ryu and Ken?',
                   'What is most the memorable move of Ryu and Ken?',
                   'What is the difference between Ryu’s and Ken’s super shoryuken?',
                   'Why does Sagat hate Ryu?',
                   'Why does Ryu turn into Evil Ryu?'
                   ];
 
 // Include the correct answer inside possible answers. Integrate correct answer with possible answers randomly. Then, correctAnswers array will be used to check if user selects correct answer.
 
 // If adding a new question --> Add possible answers, including correct.
 
 const possibleAnswers = [
                         ['Guile','Ryu', 'M. Bison','You','No one'],
                         ['Sean', 'Dan', 'Akuma', 'Ken', 'Sakura'],
                         ['Kung Fu', 'Wing Chun', 'Art of the Fist', 'Satsui no Hado', 'Shotokan'],
                         ['M. Bison', 'Akuma', 'Gouken', 'No one', 'Themselves'],
                         ['Akuma murdered him', 'He trains at the dojo', 'He travels to improve his skills', 'He retired', 'He meditates on mountains.'],
                         ['Dan and Karin', 'Sakura and Sean', 'Hinata and Kintaro', 'Abel and Alex', 'Dan and Batsu'],
                         ['Tatsumaki Senpu Kyaku', 'Shun Goku Satsu', 'Hadouken', 'Rekkaken', 'Piledriver'],
                         ['Ryu’s: Firey, Ken’s: Electric','Ryu’s: Fast, Ken’s: Slow','Ryu’s: Left to right, Ken’s: Bottom to top', 'Ryu’s: Few strong hits, Ken’s: Many small hits','Ryu: Uses fists, Ken: Uses feet'],
                         ['For scarring his chest', 'He can’t defeat Ryu', 'Ryu wants to defeat M.Bison', 'For Ryu uppercutting him', 'Ryu walked away from fighting him'],
                         ['He gets really angry', 'He enjoys the violence', 'Loses control of his Satsui no Hadou', 'When he wants vengeance', 'When one of his friends is badly hurt.']
                         ];
 
 // If New question added --> add correct answer
 
 const correctAnswers = ['Ryu',
                         'Ken',
                         'Shotokan',
                         'Gouken',
                         'Akuma murdered him',
                         'Sakura and Sean',
                         'Hadouken',
                         'Ryu’s: Few strong hits, Ken’s: Many small hits',
                         'For scarring his chest',
                         'Loses control of his Satsui no Hadou'
                         ];
                         
 const userChoices = [];
                         