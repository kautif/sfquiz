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
                         ['Kung Fu', 'Tae Kwon Do', 'Art of the Fist', 'Satsui no Hado', 'Shotokan'],
                         ['M. Bison', 'Akuma', 'Gouken', 'They never had a master', 'themselves'],
                         ['Akuma murdered him', 'He remains at the dojo which Ryu and Ken learned from', 'He travels the world to improve his skills', 'He retired', 'He meditates on top of mountains.'],
                         ['Dan and Karin', 'Sakura and Sean', 'Hinata and Kintaro', 'Abel and Alex', 'Dan and Batsu'],
                         ['Tatsumaki Senpu Kyaku', 'Shun Goku Satsu', 'Hadouken', 'Shinryu Reppa', 'Piledriver'],
                         ['Ryu’s is firey and Ken’s is electric','Ryu’s is fast and Ken’s is slow','Ryu’s goes across the screen and Ken’s goes straight up', 'Ryu’s is a few strong hits and Ken’s is a lot of small hits','Ryu uses his fists and Ken uses his feet'],
                         ['Because of the scar he gave on his chest and for permanently blinding his eye', 'He can’t defeat Ryu', 'Because Ryu is trying to defeat his master, Bison', 'For Ryu uppercutting him', 'Because Ryu walked away from a fight between them'],
                         ['He gets really angry', 'When being violent becomes too enjoyable', 'Loses control of his Satsui no Hadou', 'When he wants vengeance', 'When one of his friends is badly hurt.']
                         ];
 
 // If New question added --> add correct answer
 
 const correctAnswers = ['Ryu',
                         'Ken',
                         'Shotokan',
                         'Gouken',
                         'Akuma murdered him',
                         'Sakura and Sean',
                         'Hadouken',
                         'Ryu’s is a few strong hits and Ken’s is a lot of small hits',
                         'Because of the scar he gave on his chest and for permanently blinding his eye',
                         'Loses control of his Satsui no Hadou'
                         ];
                         
 const userChoices = [];
                         