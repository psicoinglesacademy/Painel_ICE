const GLOBAL = {
  "function_words": {
    "pronouns": [
      {
        "v": "I (eu)",
        "tags": [
          "pron_subj"
        ]
      },
      {
        "v": "you (você)",
        "tags": [
          "pron_subj"
        ]
      },
      {
        "v": "he (ele)",
        "tags": [
          "pron_subj",
          "singular"
        ]
      },
      {
        "v": "she (ela)",
        "tags": [
          "pron_subj",
          "singular"
        ]
      },
      {
        "v": "it (isso)",
        "tags": [
          "pron_subj",
          "singular"
        ]
      },
      {
        "v": "we (nós)",
        "tags": [
          "pron_subj",
          "plural"
        ]
      },
      {
        "v": "they (eles)",
        "tags": [
          "pron_subj",
          "plural"
        ]
      },
      {
        "v": "me (me/mim)",
        "tags": [
          "pron_obj"
        ]
      },
      {
        "v": "you (te/você)",
        "tags": [
          "pron_obj"
        ]
      },
      {
        "v": "him (ele)",
        "tags": [
          "pron_obj"
        ]
      },
      {
        "v": "her (ela)",
        "tags": [
          "pron_obj"
        ]
      },
      {
        "v": "us (nos/nós)",
        "tags": [
          "pron_obj"
        ]
      },
      {
        "v": "them (eles/elas)",
        "tags": [
          "pron_obj"
        ]
      },
      {
        "v": "it (isso)",
        "tags": [
          "pron_obj"
        ]
      }
    ],
    "determiners": [
      {
        "v": "a (um/uma)",
        "tags": [
          "det",
          "singular"
        ]
      },
      {
        "v": "an (um/uma)",
        "tags": [
          "det",
          "singular"
        ]
      },
      {
        "v": "the (o/a/os/as)",
        "tags": [
          "det"
        ]
      },
      {
        "v": "my (meu/minha)",
        "tags": [
          "det"
        ]
      },
      {
        "v": "your (seu/sua)",
        "tags": [
          "det"
        ]
      },
      {
        "v": "this (este/essa)",
        "tags": [
          "det",
          "singular"
        ]
      },
      {
        "v": "that (aquele/essa)",
        "tags": [
          "det",
          "singular"
        ]
      },
      {
        "v": "these (estes)",
        "tags": [
          "det",
          "plural"
        ]
      },
      {
        "v": "those (aqueles)",
        "tags": [
          "det",
          "plural"
        ]
      },
      {
        "v": "some (alguns)",
        "tags": [
          "det"
        ]
      },
      {
        "v": "any (qualquer/algum)",
        "tags": [
          "det"
        ]
      },
      {
        "v": "many (muitos)",
        "tags": [
          "det",
          "plural"
        ]
      },
      {
        "v": "much (muito)",
        "tags": [
          "det",
          "uncountable"
        ]
      },
      {
        "v": "few (poucos)",
        "tags": [
          "det",
          "plural"
        ]
      },
      {
        "v": "little (pouco)",
        "tags": [
          "det",
          "uncountable"
        ]
      },
      {
        "v": "several (vários)",
        "tags": [
          "det",
          "plural"
        ]
      },
      {
        "v": "each (cada)",
        "tags": [
          "det",
          "singular"
        ]
      },
      {
        "v": "every (todo)",
        "tags": [
          "det",
          "singular"
        ]
      },
      {
        "v": "all (todos)",
        "tags": [
          "det"
        ]
      },
      {
        "v": "no (nenhum)",
        "tags": [
          "det"
        ]
      },
      {
        "v": "my (meu)",
        "tags": [
          "det"
        ]
      },
      {
        "v": "your (seu)",
        "tags": [
          "det"
        ]
      },
      {
        "v": "his (dele)",
        "tags": [
          "det"
        ]
      },
      {
        "v": "her (dela)",
        "tags": [
          "det"
        ]
      },
      {
        "v": "its (dele/dela - neutro)",
        "tags": [
          "det"
        ]
      },
      {
        "v": "our (nosso)",
        "tags": [
          "det"
        ]
      },
      {
        "v": "their (deles)",
        "tags": [
          "det"
        ]
      }
    ],
    "auxiliaries": [
      {
        "v": "do (auxiliar)",
        "tags": [
          "aux"
        ]
      },
      {
        "v": "does (auxiliar 3ª pessoa)",
        "tags": [
          "aux"
        ]
      },
      {
        "v": "did (auxiliar passado)",
        "tags": [
          "aux"
        ]
      },
      {
        "v": "will (futuro)",
        "tags": [
          "aux"
        ]
      },
      {
        "v": "can (poder)",
        "tags": [
          "aux",
          "verb_modal"
        ]
      },
      {
        "v": "will (irá)",
        "tags": [
          "aux"
        ]
      },
      {
        "v": "will not (não irá)",
        "tags": [
          "aux"
        ]
      },
      {
        "v": "won't (não irá)",
        "tags": [
          "aux"
        ]
      },
      {
        "v": "do not (não)",
        "tags": [
          "aux"
        ]
      },
      {
        "v": "does not (não)",
        "tags": [
          "aux"
        ]
      },
      {
        "v": "did not (não)",
        "tags": [
          "aux"
        ]
      },
      {
        "v": "don't (não)",
        "tags": [
          "aux"
        ]
      },
      {
        "v": "doesn't (não)",
        "tags": [
          "aux"
        ]
      },
      {
        "v": "didn't (não)",
        "tags": [
          "aux"
        ]
      },
      {
        "v": "is not (não é/está)",
        "tags": [
          "aux"
        ]
      },
      {
        "v": "are not (não são/estão)",
        "tags": [
          "aux"
        ]
      },
      {
        "v": "was not (não era/estava)",
        "tags": [
          "aux"
        ]
      },
      {
        "v": "were not (não eram/estavam)",
        "tags": [
          "aux"
        ]
      },
      {
        "v": "isn't (não é/está)",
        "tags": [
          "aux"
        ]
      },
      {
        "v": "aren't (não são/estão)",
        "tags": [
          "aux"
        ]
      },
      {
        "v": "wasn't (não era/estava)",
        "tags": [
          "aux"
        ]
      },
      {
        "v": "weren't (não eram/estavam)",
        "tags": [
          "aux"
        ]
      },
      {
        "v": "cannot (não pode)",
        "tags": [
          "aux",
          "verb_modal"
        ]
      },
      {
        "v": "can't (não pode)",
        "tags": [
          "aux",
          "verb_modal"
        ]
      },
      {
        "v": "should not (não deveria)",
        "tags": [
          "aux",
          "verb_modal"
        ]
      },
      {
        "v": "shouldn't (não deveria)",
        "tags": [
          "aux",
          "verb_modal"
        ]
      },
      {
        "v": "must not (não deve)",
        "tags": [
          "aux",
          "verb_modal"
        ]
      },
      {
        "v": "mustn't (não deve)",
        "tags": [
          "aux",
          "verb_modal"
        ]
      }
    ],
    "connectors": [
      {
        "v": "and (e)",
        "tags": [
          "connector"
        ]
      },
      {
        "v": "but (mas)",
        "tags": [
          "connector"
        ]
      },
      {
        "v": "because (porque)",
        "tags": [
          "connector"
        ]
      },
      {
        "v": "so (então)",
        "tags": [
          "connector"
        ]
      }
    ],
    "prepositions": [
      {
        "v": "in (em/dentro)",
        "tags": [
          "prep"
        ]
      },
      {
        "v": "on (em/sobre)",
        "tags": [
          "prep"
        ]
      },
      {
        "v": "at (em/no)",
        "tags": [
          "prep"
        ]
      },
      {
        "v": "to (para)",
        "tags": [
          "prep"
        ]
      },
      {
        "v": "for (para/por)",
        "tags": [
          "prep"
        ]
      }
    ]
  },
  "content_words": {
    "nuclei": [
      {
        "v": "man (homem)",
        "tags": [
          "man",
          "singular"
        ]
      },
      {
        "v": "woman (mulher)",
        "tags": [
          "woman",
          "singular"
        ]
      },
      {
        "v": "people (pessoas)",
        "tags": [
          "people",
          "plural"
        ]
      },
      {
        "v": "animal (animal)",
        "tags": [
          "animal",
          "singular"
        ]
      },
      {
        "v": "animals (animais)",
        "tags": [
          "animal",
          "plural"
        ]
      },
      {
        "v": "thing (coisa)",
        "tags": [
          "thing",
          "singular"
        ]
      },
      {
        "v": "things (coisas)",
        "tags": [
          "thing",
          "plural"
        ]
      },
      {
        "v": "place (lugar)",
        "tags": [
          "place",
          "singular"
        ]
      },
      {
        "v": "places (lugares)",
        "tags": [
          "place",
          "plural"
        ]
      }
    ],
    "nouns": [
      {
        "v": "teacher (professor)",
        "tags": [
          "man",
          "person",
          "study",
          "singular"
        ]
      },
      {
        "v": "teachers (professores)",
        "tags": [
          "people",
          "person",
          "study",
          "plural"
        ]
      },
      {
        "v": "dog (cachorro)",
        "tags": [
          "animal",
          "singular"
        ]
      },
      {
        "v": "dogs (cachorros)",
        "tags": [
          "animal",
          "plural"
        ]
      },
      {
        "v": "car (carro)",
        "tags": [
          "thing",
          "singular"
        ]
      },
      {
        "v": "cars (carros)",
        "tags": [
          "thing",
          "plural"
        ]
      },
      {
        "v": "city (cidade)",
        "tags": [
          "place",
          "singular"
        ]
      },
      {
        "v": "cities (cidades)",
        "tags": [
          "place",
          "plural"
        ]
      },
      {
        "v": "father (pai)",
        "tags": [
          "man",
          "singular"
        ]
      },
      {
        "v": "brother (irmão)",
        "tags": [
          "man",
          "singular"
        ]
      },
      {
        "v": "uncle (tio)",
        "tags": [
          "man",
          "singular"
        ]
      },
      {
        "v": "grandfather (avô)",
        "tags": [
          "man",
          "singular"
        ]
      },
      {
        "v": "husband (marido)",
        "tags": [
          "man",
          "singular"
        ]
      },
      {
        "v": "boy (menino)",
        "tags": [
          "man",
          "singular"
        ]
      },
      {
        "v": "man (homem)",
        "tags": [
          "man",
          "singular"
        ]
      },
      {
        "v": "student (estudante)",
        "tags": [
          "man",
          "singular"
        ]
      },
      {
        "v": "doctor (médico)",
        "tags": [
          "man",
          "singular"
        ]
      },
      {
        "v": "driver (motorista)",
        "tags": [
          "man",
          "singular"
        ]
      },
      {
        "v": "worker (trabalhador)",
        "tags": [
          "man",
          "singular"
        ]
      },
      {
        "v": "friend (amigo)",
        "tags": [
          "man",
          "singular"
        ]
      },
      {
        "v": "neighbor (vizinho)",
        "tags": [
          "man",
          "singular"
        ]
      },
      {
        "v": "boss (chefe)",
        "tags": [
          "man",
          "singular"
        ]
      },
      {
        "v": "manager (gerente)",
        "tags": [
          "man",
          "singular"
        ]
      },
      {
        "v": "waiter (garçom)",
        "tags": [
          "man",
          "singular"
        ]
      },
      {
        "v": "police officer (policial)",
        "tags": [
          "man",
          "singular"
        ]
      },
      {
        "v": "player (jogador)",
        "tags": [
          "man",
          "singular"
        ]
      },
      {
        "v": "runner (corredor)",
        "tags": [
          "man",
          "singular"
        ]
      },
      {
        "v": "mother (mãe)",
        "tags": [
          "woman",
          "singular"
        ]
      },
      {
        "v": "sister (irmã)",
        "tags": [
          "woman",
          "singular"
        ]
      },
      {
        "v": "aunt (tia)",
        "tags": [
          "woman",
          "singular"
        ]
      },
      {
        "v": "grandmother (avó)",
        "tags": [
          "woman",
          "singular"
        ]
      },
      {
        "v": "wife (esposa)",
        "tags": [
          "woman",
          "singular"
        ]
      },
      {
        "v": "girl (menina)",
        "tags": [
          "woman",
          "singular"
        ]
      },
      {
        "v": "woman (mulher)",
        "tags": [
          "woman",
          "singular"
        ]
      },
      {
        "v": "teacher (professora)",
        "tags": [
          "woman",
          "singular"
        ]
      },
      {
        "v": "doctor (médica)",
        "tags": [
          "woman",
          "singular"
        ]
      },
      {
        "v": "nurse (enfermeira)",
        "tags": [
          "woman",
          "singular"
        ]
      },
      {
        "v": "friend (amiga)",
        "tags": [
          "woman",
          "singular"
        ]
      },
      {
        "v": "neighbor (vizinha)",
        "tags": [
          "woman",
          "singular"
        ]
      },
      {
        "v": "waitress (garçonete)",
        "tags": [
          "woman",
          "singular"
        ]
      },
      {
        "v": "player (jogadora)",
        "tags": [
          "woman",
          "singular"
        ]
      },
      {
        "v": "dancer (dançarina)",
        "tags": [
          "woman",
          "singular"
        ]
      },
      {
        "v": "runner (corredora)",
        "tags": [
          "woman",
          "singular"
        ]
      },
      {
        "v": "employee (funcionária)",
        "tags": [
          "woman",
          "singular"
        ]
      },
      {
        "v": "parents (pais)",
        "tags": [
          "people",
          "plural"
        ]
      },
      {
        "v": "friends (amigos)",
        "tags": [
          "people",
          "plural"
        ]
      },
      {
        "v": "students (estudantes)",
        "tags": [
          "people",
          "plural"
        ]
      },
      {
        "v": "workers (trabalhadores)",
        "tags": [
          "people",
          "plural"
        ]
      },
      {
        "v": "doctors (médicos)",
        "tags": [
          "people",
          "plural"
        ]
      },
      {
        "v": "drivers (motoristas)",
        "tags": [
          "people",
          "plural"
        ]
      },
      {
        "v": "neighbors (vizinhos)",
        "tags": [
          "people",
          "plural"
        ]
      },
      {
        "v": "players (jogadores)",
        "tags": [
          "people",
          "plural"
        ]
      },
      {
        "v": "runners (corredores)",
        "tags": [
          "people",
          "plural"
        ]
      },
      {
        "v": "employees (funcionários)",
        "tags": [
          "people",
          "plural"
        ]
      },
      {
        "v": "customers (clientes)",
        "tags": [
          "people",
          "plural"
        ]
      },
      {
        "v": "passengers (passageiros)",
        "tags": [
          "people",
          "plural"
        ]
      },
      {
        "v": "tourists (turistas)",
        "tags": [
          "people",
          "plural"
        ]
      },
      {
        "v": "children (crianças)",
        "tags": [
          "people",
          "plural"
        ]
      },
      {
        "v": "teenagers (adolescentes)",
        "tags": [
          "people",
          "plural"
        ]
      },
      {
        "v": "managers (gerentes)",
        "tags": [
          "people",
          "plural"
        ]
      },
      {
        "v": "bosses (chefes)",
        "tags": [
          "people",
          "plural"
        ]
      },
      {
        "v": "families (famílias)",
        "tags": [
          "people",
          "plural"
        ]
      },
      {
        "v": "teams (equipes)",
        "tags": [
          "people",
          "plural"
        ]
      },
      {
        "v": "cat (gato)",
        "tags": [
          "animal",
          "singular"
        ]
      },
      {
        "v": "bird (pássaro)",
        "tags": [
          "animal",
          "singular"
        ]
      },
      {
        "v": "horse (cavalo)",
        "tags": [
          "animal",
          "singular"
        ]
      },
      {
        "v": "fish (peixe)",
        "tags": [
          "animal",
          "singular"
        ]
      },
      {
        "v": "lion (leão)",
        "tags": [
          "animal",
          "singular"
        ]
      },
      {
        "v": "tiger (tigre)",
        "tags": [
          "animal",
          "singular"
        ]
      },
      {
        "v": "monkey (macaco)",
        "tags": [
          "animal",
          "singular"
        ]
      },
      {
        "v": "cow (vaca)",
        "tags": [
          "animal",
          "singular"
        ]
      },
      {
        "v": "snake (cobra)",
        "tags": [
          "animal",
          "singular"
        ]
      },
      {
        "v": "cats (gatos)",
        "tags": [
          "animal",
          "plural"
        ]
      },
      {
        "v": "birds (pássaros)",
        "tags": [
          "animal",
          "plural"
        ]
      },
      {
        "v": "horses (cavalos)",
        "tags": [
          "animal",
          "plural"
        ]
      },
      {
        "v": "fish (peixes)",
        "tags": [
          "animal",
          "plural"
        ]
      },
      {
        "v": "lions (leões)",
        "tags": [
          "animal",
          "plural"
        ]
      },
      {
        "v": "tigers (tigres)",
        "tags": [
          "animal",
          "plural"
        ]
      },
      {
        "v": "monkeys (macacos)",
        "tags": [
          "animal",
          "plural"
        ]
      },
      {
        "v": "cows (vacas)",
        "tags": [
          "animal",
          "plural"
        ]
      },
      {
        "v": "snakes (cobras)",
        "tags": [
          "animal",
          "plural"
        ]
      },
      {
        "v": "book (livro)",
        "tags": [
          "thing",
          "singular"
        ]
      },
      {
        "v": "phone (telefone)",
        "tags": [
          "thing",
          "singular"
        ]
      },
      {
        "v": "computer (computador)",
        "tags": [
          "thing",
          "singular"
        ]
      },
      {
        "v": "table (mesa)",
        "tags": [
          "thing",
          "singular"
        ]
      },
      {
        "v": "chair (cadeira)",
        "tags": [
          "thing",
          "singular"
        ]
      },
      {
        "v": "bag (bolsa)",
        "tags": [
          "thing",
          "singular"
        ]
      },
      {
        "v": "key (chave)",
        "tags": [
          "thing",
          "singular"
        ]
      },
      {
        "v": "ticket (bilhete)",
        "tags": [
          "thing",
          "singular"
        ]
      },
      {
        "v": "document (documento)",
        "tags": [
          "thing",
          "singular"
        ]
      },
      {
        "v": "books (livros)",
        "tags": [
          "thing",
          "plural"
        ]
      },
      {
        "v": "phones (telefones)",
        "tags": [
          "thing",
          "plural"
        ]
      },
      {
        "v": "computers (computadores)",
        "tags": [
          "thing",
          "plural"
        ]
      },
      {
        "v": "tables (mesas)",
        "tags": [
          "thing",
          "plural"
        ]
      },
      {
        "v": "chairs (cadeiras)",
        "tags": [
          "thing",
          "plural"
        ]
      },
      {
        "v": "bags (bolsas)",
        "tags": [
          "thing",
          "plural"
        ]
      },
      {
        "v": "keys (chaves)",
        "tags": [
          "thing",
          "plural"
        ]
      },
      {
        "v": "tickets (bilhetes)",
        "tags": [
          "thing",
          "plural"
        ]
      },
      {
        "v": "documents (documentos)",
        "tags": [
          "thing",
          "plural"
        ]
      },
      {
        "v": "house (casa)",
        "tags": [
          "place",
          "singular"
        ]
      },
      {
        "v": "school (escola)",
        "tags": [
          "place",
          "singular"
        ]
      },
      {
        "v": "airport (aeroporto)",
        "tags": [
          "place",
          "singular"
        ]
      },
      {
        "v": "restaurant (restaurante)",
        "tags": [
          "place",
          "singular"
        ]
      },
      {
        "v": "hotel (hotel)",
        "tags": [
          "place",
          "singular"
        ]
      },
      {
        "v": "park (parque)",
        "tags": [
          "place",
          "singular"
        ]
      },
      {
        "v": "store (loja)",
        "tags": [
          "place",
          "singular"
        ]
      },
      {
        "v": "hospital (hospital)",
        "tags": [
          "place",
          "singular"
        ]
      },
      {
        "v": "street (rua)",
        "tags": [
          "place",
          "singular"
        ]
      },
      {
        "v": "houses (casas)",
        "tags": [
          "place",
          "plural"
        ]
      },
      {
        "v": "schools (escolas)",
        "tags": [
          "place",
          "plural"
        ]
      },
      {
        "v": "airports (aeroportos)",
        "tags": [
          "place",
          "plural"
        ]
      },
      {
        "v": "restaurants (restaurantes)",
        "tags": [
          "place",
          "plural"
        ]
      },
      {
        "v": "hotels (hotéis)",
        "tags": [
          "place",
          "plural"
        ]
      },
      {
        "v": "parks (parques)",
        "tags": [
          "place",
          "plural"
        ]
      },
      {
        "v": "stores (lojas)",
        "tags": [
          "place",
          "plural"
        ]
      },
      {
        "v": "hospitals (hospitais)",
        "tags": [
          "place",
          "plural"
        ]
      },
      {
        "v": "streets (ruas)",
        "tags": [
          "place",
          "plural"
        ]
      },
      {
        "v": "food (comida)",
        "tags": [
          "noun",
          "thing",
          "uncountable",
          "food"
        ]
      },
      {
        "v": "meal (refeição)",
        "tags": [
          "noun",
          "thing",
          "singular",
          "food"
        ]
      },
      {
        "v": "breakfast (café da manhã)",
        "tags": [
          "noun",
          "thing",
          "singular",
          "food"
        ]
      },
      {
        "v": "lunch (almoço)",
        "tags": [
          "noun",
          "thing",
          "singular",
          "food"
        ]
      },
      {
        "v": "dinner (jantar)",
        "tags": [
          "noun",
          "thing",
          "singular",
          "food"
        ]
      },
      {
        "v": "snack (lanche)",
        "tags": [
          "noun",
          "thing",
          "singular",
          "food"
        ]
      },
      {
        "v": "pizza (pizza)",
        "tags": [
          "noun",
          "thing",
          "singular",
          "food"
        ]
      },
      {
        "v": "burger (hambúrguer)",
        "tags": [
          "noun",
          "thing",
          "singular",
          "food"
        ]
      },
      {
        "v": "sandwich (sanduíche)",
        "tags": [
          "noun",
          "thing",
          "singular",
          "food"
        ]
      },
      {
        "v": "rice (arroz)",
        "tags": [
          "noun",
          "thing",
          "uncountable",
          "food"
        ]
      },
      {
        "v": "chicken (frango)",
        "tags": [
          "noun",
          "thing",
          "uncountable",
          "food"
        ]
      },
      {
        "v": "meat (carne)",
        "tags": [
          "noun",
          "thing",
          "uncountable",
          "food"
        ]
      },
      {
        "v": "salad (salada)",
        "tags": [
          "noun",
          "thing",
          "singular",
          "food"
        ]
      },
      {
        "v": "fruit (fruta)",
        "tags": [
          "noun",
          "thing",
          "singular",
          "food"
        ]
      },
      {
        "v": "water (água)",
        "tags": [
          "noun",
          "thing",
          "uncountable",
          "food"
        ]
      },
      {
        "v": "juice (suco)",
        "tags": [
          "noun",
          "thing",
          "uncountable",
          "food"
        ]
      },
      {
        "v": "coffee (café)",
        "tags": [
          "noun",
          "thing",
          "uncountable",
          "food"
        ]
      },
      {
        "v": "tea (chá)",
        "tags": [
          "noun",
          "thing",
          "uncountable",
          "food"
        ]
      },
      {
        "v": "milk (leite)",
        "tags": [
          "noun",
          "thing",
          "uncountable",
          "food"
        ]
      },
      {
        "v": "product (produto)",
        "tags": [
          "noun",
          "thing",
          "singular",
          "shopping"
        ]
      },
      {
        "v": "item (item)",
        "tags": [
          "noun",
          "thing",
          "singular",
          "shopping"
        ]
      },
      {
        "v": "gift (presente)",
        "tags": [
          "noun",
          "thing",
          "singular",
          "shopping"
        ]
      },
      {
        "v": "tool (ferramenta)",
        "tags": [
          "noun",
          "thing",
          "singular",
          "work"
        ]
      },
      {
        "v": "device (dispositivo)",
        "tags": [
          "noun",
          "thing",
          "singular",
          "technology"
        ]
      },
      {
        "v": "machine (máquina)",
        "tags": [
          "noun",
          "thing",
          "singular",
          "work"
        ]
      },
      {
        "v": "products (produtos)",
        "tags": [
          "noun",
          "thing",
          "plural",
          "shopping"
        ]
      },
      {
        "v": "items (itens)",
        "tags": [
          "noun",
          "thing",
          "plural",
          "shopping"
        ]
      },
      {
        "v": "gifts (presentes)",
        "tags": [
          "noun",
          "thing",
          "plural",
          "shopping"
        ]
      },
      {
        "v": "tools (ferramentas)",
        "tags": [
          "noun",
          "thing",
          "plural",
          "work"
        ]
      },
      {
        "v": "devices (dispositivos)",
        "tags": [
          "noun",
          "thing",
          "plural",
          "technology"
        ]
      },
      {
        "v": "machines (máquinas)",
        "tags": [
          "noun",
          "thing",
          "plural",
          "work"
        ]
      },
      {
        "v": "person (pessoa)",
        "tags": [
          "noun",
          "people",
          "singular",
          "relationships"
        ]
      },
      {
        "v": "customer (cliente)",
        "tags": [
          "noun",
          "man",
          "singular",
          "shopping"
        ]
      },
      {
        "v": "passenger (passageiro)",
        "tags": [
          "noun",
          "man",
          "singular",
          "travel"
        ]
      },
      {
        "v": "family (família)",
        "tags": [
          "noun",
          "people",
          "singular",
          "relationships"
        ]
      },
      {
        "v": "team (equipe)",
        "tags": [
          "noun",
          "people",
          "singular",
          "work"
        ]
      },
      {
        "v": "group (grupo)",
        "tags": [
          "noun",
          "people",
          "singular",
          "relationships"
        ]
      },
      {
        "v": "people (pessoas)",
        "tags": [
          "noun",
          "people",
          "plural",
          "relationships"
        ]
      },
      {
        "v": "groups (grupos)",
        "tags": [
          "noun",
          "people",
          "plural",
          "relationships"
        ]
      },
      {
        "v": "message (mensagem)",
        "tags": [
          "noun",
          "thing",
          "singular",
          "technology"
        ]
      },
      {
        "v": "email (email)",
        "tags": [
          "noun",
          "thing",
          "singular",
          "technology"
        ]
      },
      {
        "v": "letter (carta)",
        "tags": [
          "noun",
          "thing",
          "singular",
          "communication"
        ]
      },
      {
        "v": "information (informação)",
        "tags": [
          "noun",
          "thing",
          "uncountable",
          "study"
        ]
      },
      {
        "v": "help (ajuda)",
        "tags": [
          "noun",
          "thing",
          "uncountable",
          "relationships"
        ]
      },
      {
        "v": "support (suporte)",
        "tags": [
          "noun",
          "thing",
          "uncountable",
          "work"
        ]
      },
      {
        "v": "money (dinheiro)",
        "tags": [
          "noun",
          "thing",
          "uncountable",
          "shopping"
        ]
      },
      {
        "v": "photo (foto)",
        "tags": [
          "noun",
          "thing",
          "singular",
          "technology"
        ]
      },
      {
        "v": "image (imagem)",
        "tags": [
          "noun",
          "thing",
          "singular",
          "technology"
        ]
      },
      {
        "v": "video (vídeo)",
        "tags": [
          "noun",
          "thing",
          "singular",
          "technology"
        ]
      },
      {
        "v": "movie (filme)",
        "tags": [
          "noun",
          "thing",
          "singular",
          "entertainment"
        ]
      },
      {
        "v": "text (texto)",
        "tags": [
          "noun",
          "thing",
          "singular",
          "study"
        ]
      },
      {
        "v": "country (país)",
        "tags": [
          "noun",
          "place",
          "singular",
          "travel"
        ]
      },
      {
        "v": "office (escritório)",
        "tags": [
          "noun",
          "place",
          "singular",
          "work"
        ]
      },
      {
        "v": "room (quarto)",
        "tags": [
          "noun",
          "place",
          "singular",
          "home"
        ]
      },
      {
        "v": "countries (países)",
        "tags": [
          "noun",
          "place",
          "plural",
          "travel"
        ]
      },
      {
        "v": "offices (escritórios)",
        "tags": [
          "noun",
          "place",
          "plural",
          "work"
        ]
      },
      {
        "v": "rooms (quartos)",
        "tags": [
          "noun",
          "place",
          "plural",
          "home"
        ]
      },
      {
        "v": "animal (animal)",
        "tags": [
          "noun",
          "animal",
          "singular"
        ]
      },
      {
        "v": "animals (animais)",
        "tags": [
          "noun",
          "animal",
          "plural"
        ]
      },
      {
        "v": "bed (cama)",
        "tags": [
          "noun",
          "thing",
          "singular",
          "home"
        ]
      },
      {
        "v": "door (porta)",
        "tags": [
          "noun",
          "thing",
          "singular",
          "home"
        ]
      },
      {
        "v": "window (janela)",
        "tags": [
          "noun",
          "thing",
          "singular",
          "home"
        ]
      },
      {
        "v": "light (luz)",
        "tags": [
          "noun",
          "thing",
          "singular",
          "home"
        ]
      },
      {
        "v": "beds (camas)",
        "tags": [
          "noun",
          "thing",
          "plural",
          "home"
        ]
      },
      {
        "v": "doors (portas)",
        "tags": [
          "noun",
          "thing",
          "plural",
          "home"
        ]
      },
      {
        "v": "windows (janelas)",
        "tags": [
          "noun",
          "thing",
          "plural",
          "home"
        ]
      },
      {
        "v": "lights (luzes)",
        "tags": [
          "noun",
          "thing",
          "plural",
          "home"
        ]
      },
      {
        "v": "problem (problema)",
        "tags": [
          "noun",
          "thing",
          "singular"
        ]
      },
      {
        "v": "idea (ideia)",
        "tags": [
          "noun",
          "thing",
          "singular"
        ]
      },
      {
        "v": "plan (plano)",
        "tags": [
          "noun",
          "thing",
          "singular"
        ]
      },
      {
        "v": "decision (decisão)",
        "tags": [
          "noun",
          "thing",
          "singular"
        ]
      },
      {
        "v": "question (pergunta)",
        "tags": [
          "noun",
          "thing",
          "singular"
        ]
      },
      {
        "v": "answer (resposta)",
        "tags": [
          "noun",
          "thing",
          "singular"
        ]
      },
      {
        "v": "problems (problemas)",
        "tags": [
          "noun",
          "thing",
          "plural"
        ]
      },
      {
        "v": "ideas (ideias)",
        "tags": [
          "noun",
          "thing",
          "plural"
        ]
      },
      {
        "v": "plans (planos)",
        "tags": [
          "noun",
          "thing",
          "plural"
        ]
      },
      {
        "v": "decisions (decisões)",
        "tags": [
          "noun",
          "thing",
          "plural"
        ]
      },
      {
        "v": "questions (perguntas)",
        "tags": [
          "noun",
          "thing",
          "plural"
        ]
      },
      {
        "v": "answers (respostas)",
        "tags": [
          "noun",
          "thing",
          "plural"
        ]
      }
    ],
    "verbs": [
      {
        "v": "eat (comer)",
        "tags": [
          "verb",
          "verb_obj"
        ]
      },
      {
        "v": "buy (comprar)",
        "tags": [
          "verb",
          "verb_obj"
        ]
      },
      {
        "v": "sleep (dormir)",
        "tags": [
          "verb",
          "verb_noobj"
        ]
      },
      {
        "v": "arrive (chegar)",
        "tags": [
          "verb",
          "verb_noobj"
        ]
      },
      {
        "v": "enjoy (gostar de)",
        "tags": [
          "verb",
          "verb_ing"
        ]
      },
      {
        "v": "avoid (evitar)",
        "tags": [
          "verb",
          "verb_ing"
        ]
      },
      {
        "v": "look for (procurar)",
        "tags": [
          "verb",
          "verb_prep"
        ]
      },
      {
        "v": "wait for (esperar por)",
        "tags": [
          "verb",
          "verb_prep"
        ]
      },
      {
        "v": "give (dar)",
        "tags": [
          "verb",
          "verb_2obj"
        ]
      },
      {
        "v": "send (enviar)",
        "tags": [
          "verb",
          "verb_2obj"
        ]
      },
      {
        "v": "be (ser/estar)",
        "tags": [
          "verb",
          "verb_link"
        ]
      },
      {
        "v": "seem (parecer)",
        "tags": [
          "verb",
          "verb_link"
        ]
      },
      {
        "v": "can (poder)",
        "tags": [
          "verb",
          "verb_modal"
        ]
      },
      {
        "v": "must (dever/ter que)",
        "tags": [
          "verb",
          "verb_modal"
        ]
      },
      {
        "v": "take (pegar/levar)",
        "tags": [
          "verb",
          "verb_obj"
        ]
      },
      {
        "v": "use (usar)",
        "tags": [
          "verb",
          "verb_obj"
        ]
      },
      {
        "v": "see (ver)",
        "tags": [
          "verb",
          "verb_obj"
        ]
      },
      {
        "v": "watch (assistir)",
        "tags": [
          "verb",
          "verb_obj"
        ]
      },
      {
        "v": "read (ler)",
        "tags": [
          "verb",
          "verb_obj"
        ]
      },
      {
        "v": "write (escrever)",
        "tags": [
          "verb",
          "verb_obj"
        ]
      },
      {
        "v": "open (abrir)",
        "tags": [
          "verb",
          "verb_obj"
        ]
      },
      {
        "v": "close (fechar)",
        "tags": [
          "verb",
          "verb_obj"
        ]
      },
      {
        "v": "clean (limpar)",
        "tags": [
          "verb",
          "verb_obj"
        ]
      },
      {
        "v": "build (construir)",
        "tags": [
          "verb",
          "verb_obj"
        ]
      },
      {
        "v": "fix (consertar)",
        "tags": [
          "verb",
          "verb_obj"
        ]
      },
      {
        "v": "carry (carregar)",
        "tags": [
          "verb",
          "verb_obj"
        ]
      },
      {
        "v": "bring (trazer)",
        "tags": [
          "verb",
          "verb_obj"
        ]
      },
      {
        "v": "choose (escolher)",
        "tags": [
          "verb",
          "verb_obj"
        ]
      },
      {
        "v": "call (ligar/chamar)",
        "tags": [
          "verb",
          "verb_obj"
        ]
      },
      {
        "v": "help (ajudar)",
        "tags": [
          "verb",
          "verb_obj"
        ]
      },
      {
        "v": "meet (encontrar)",
        "tags": [
          "verb",
          "verb_obj"
        ]
      },
      {
        "v": "visit (visitar)",
        "tags": [
          "verb",
          "verb_obj"
        ]
      },
      {
        "v": "go (ir)",
        "tags": [
          "verb",
          "verb_noobj"
        ]
      },
      {
        "v": "come (vir)",
        "tags": [
          "verb",
          "verb_noobj"
        ]
      },
      {
        "v": "run (correr)",
        "tags": [
          "verb",
          "verb_noobj"
        ]
      },
      {
        "v": "walk (andar)",
        "tags": [
          "verb",
          "verb_noobj"
        ]
      },
      {
        "v": "travel (viajar)",
        "tags": [
          "verb",
          "verb_noobj"
        ]
      },
      {
        "v": "happen (acontecer)",
        "tags": [
          "verb",
          "verb_noobj"
        ]
      },
      {
        "v": "wait (esperar)",
        "tags": [
          "verb",
          "verb_noobj"
        ]
      },
      {
        "v": "stay (ficar)",
        "tags": [
          "verb",
          "verb_noobj"
        ]
      },
      {
        "v": "live (viver/morar)",
        "tags": [
          "verb",
          "verb_noobj"
        ]
      },
      {
        "v": "work (trabalhar)",
        "tags": [
          "verb",
          "verb_noobj"
        ]
      },
      {
        "v": "study (estudar)",
        "tags": [
          "verb",
          "verb_noobj"
        ]
      },
      {
        "v": "play (jogar/brincar)",
        "tags": [
          "verb",
          "verb_noobj"
        ]
      },
      {
        "v": "stop (parar)",
        "tags": [
          "verb",
          "verb_noobj"
        ]
      },
      {
        "v": "start (começar)",
        "tags": [
          "verb",
          "verb_noobj"
        ]
      },
      {
        "v": "continue (continuar)",
        "tags": [
          "verb",
          "verb_noobj"
        ]
      },
      {
        "v": "grow (crescer)",
        "tags": [
          "verb",
          "verb_noobj"
        ]
      },
      {
        "v": "fall (cair)",
        "tags": [
          "verb",
          "verb_noobj"
        ]
      },
      {
        "v": "rise (subir)",
        "tags": [
          "verb",
          "verb_noobj"
        ]
      },
      {
        "v": "finish (terminar)",
        "tags": [
          "verb",
          "verb_ing"
        ]
      },
      {
        "v": "keep (continuar)",
        "tags": [
          "verb",
          "verb_ing"
        ]
      },
      {
        "v": "suggest (sugerir)",
        "tags": [
          "verb",
          "verb_ing"
        ]
      },
      {
        "v": "recommend (recomendar)",
        "tags": [
          "verb",
          "verb_ing"
        ]
      },
      {
        "v": "consider (considerar)",
        "tags": [
          "verb",
          "verb_ing"
        ]
      },
      {
        "v": "practice (praticar)",
        "tags": [
          "verb",
          "verb_ing"
        ]
      },
      {
        "v": "mind (se importar)",
        "tags": [
          "verb",
          "verb_ing"
        ]
      },
      {
        "v": "miss (sentir falta)",
        "tags": [
          "verb",
          "verb_ing"
        ]
      },
      {
        "v": "delay (adiar)",
        "tags": [
          "verb",
          "verb_ing"
        ]
      },
      {
        "v": "postpone (postergar)",
        "tags": [
          "verb",
          "verb_ing"
        ]
      },
      {
        "v": "quit (parar de)",
        "tags": [
          "verb",
          "verb_ing"
        ]
      },
      {
        "v": "stop (parar de)",
        "tags": [
          "verb",
          "verb_ing"
        ]
      },
      {
        "v": "love (amar)",
        "tags": [
          "verb",
          "verb_ing"
        ]
      },
      {
        "v": "like (gostar)",
        "tags": [
          "verb",
          "verb_obj"
        ]
      },
      {
        "v": "hate (odiar)",
        "tags": [
          "verb",
          "verb_ing"
        ]
      },
      {
        "v": "ask for (pedir)",
        "tags": [
          "verb",
          "verb_prep"
        ]
      },
      {
        "v": "pay for (pagar por)",
        "tags": [
          "verb",
          "verb_prep"
        ]
      },
      {
        "v": "look at (olhar para)",
        "tags": [
          "verb",
          "verb_prep"
        ]
      },
      {
        "v": "believe in (acreditar em)",
        "tags": [
          "verb",
          "verb_prep"
        ]
      },
      {
        "v": "think about (pensar sobre)",
        "tags": [
          "verb",
          "verb_prep"
        ]
      },
      {
        "v": "care about (se importar com)",
        "tags": [
          "verb",
          "verb_prep"
        ]
      },
      {
        "v": "depend on (depender de)",
        "tags": [
          "verb",
          "verb_prep"
        ]
      },
      {
        "v": "focus on (focar em)",
        "tags": [
          "verb",
          "verb_prep"
        ]
      },
      {
        "v": "agree with (concordar com)",
        "tags": [
          "verb",
          "verb_prep"
        ]
      },
      {
        "v": "talk about (falar sobre)",
        "tags": [
          "verb",
          "verb_prep"
        ]
      },
      {
        "v": "learn about (aprender sobre)",
        "tags": [
          "verb",
          "verb_prep"
        ]
      },
      {
        "v": "deal with (lidar com)",
        "tags": [
          "verb",
          "verb_prep"
        ]
      },
      {
        "v": "come from (vir de)",
        "tags": [
          "verb",
          "verb_prep"
        ]
      },
      {
        "v": "work on (trabalhar em)",
        "tags": [
          "verb",
          "verb_prep"
        ]
      },
      {
        "v": "show (mostrar)",
        "tags": [
          "verb",
          "verb_2obj"
        ]
      },
      {
        "v": "tell (dizer)",
        "tags": [
          "verb",
          "verb_2obj"
        ]
      },
      {
        "v": "offer (oferecer)",
        "tags": [
          "verb",
          "verb_2obj"
        ]
      },
      {
        "v": "lend (emprestar)",
        "tags": [
          "verb",
          "verb_2obj"
        ]
      },
      {
        "v": "pass (passar)",
        "tags": [
          "verb",
          "verb_2obj"
        ]
      },
      {
        "v": "teach (ensinar)",
        "tags": [
          "verb",
          "verb_2obj"
        ]
      },
      {
        "v": "sell (vender)",
        "tags": [
          "verb",
          "verb_2obj"
        ]
      },
      {
        "v": "buy (comprar para alguém)",
        "tags": [
          "verb",
          "verb_2obj"
        ]
      },
      {
        "v": "pay (pagar)",
        "tags": [
          "verb",
          "verb_2obj"
        ]
      },
      {
        "v": "write (escrever para)",
        "tags": [
          "verb",
          "verb_2obj"
        ]
      },
      {
        "v": "read (ler para)",
        "tags": [
          "verb",
          "verb_2obj"
        ]
      },
      {
        "v": "promise (prometer)",
        "tags": [
          "verb",
          "verb_2obj"
        ]
      },
      {
        "v": "give back (devolver)",
        "tags": [
          "verb",
          "verb_2obj"
        ]
      },
      {
        "v": "send back (enviar de volta)",
        "tags": [
          "verb",
          "verb_2obj"
        ]
      },
      {
        "v": "hand (entregar)",
        "tags": [
          "verb",
          "verb_2obj"
        ]
      },
      {
        "v": "bring back (trazer de volta)",
        "tags": [
          "verb",
          "verb_2obj"
        ]
      },
      {
        "v": "become (tornar-se)",
        "tags": [
          "verb",
          "verb_link"
        ]
      },
      {
        "v": "feel (sentir)",
        "tags": [
          "verb",
          "verb_link"
        ]
      },
      {
        "v": "look (parecer)",
        "tags": [
          "verb",
          "verb_link"
        ]
      },
      {
        "v": "sound (soar)",
        "tags": [
          "verb",
          "verb_link"
        ]
      },
      {
        "v": "appear (aparecer/parecer)",
        "tags": [
          "verb",
          "verb_link"
        ]
      },
      {
        "v": "remain (permanecer)",
        "tags": [
          "verb",
          "verb_link"
        ]
      },
      {
        "v": "turn (ficar/tornar-se)",
        "tags": [
          "verb",
          "verb_link"
        ]
      },
      {
        "v": "grow (tornar-se)",
        "tags": [
          "verb",
          "verb_link"
        ]
      },
      {
        "v": "get (ficar/tornar-se)",
        "tags": [
          "verb",
          "verb_link"
        ]
      },
      {
        "v": "prove (provar-se)",
        "tags": [
          "verb",
          "verb_link"
        ]
      },
      {
        "v": "end up (acabar sendo)",
        "tags": [
          "verb",
          "verb_link"
        ]
      },
      {
        "v": "keep (manter-se)",
        "tags": [
          "verb",
          "verb_link"
        ]
      },
      {
        "v": "look like (parecer)",
        "tags": [
          "verb",
          "verb_link"
        ]
      },
      {
        "v": "sound like (soar como)",
        "tags": [
          "verb",
          "verb_link"
        ]
      },
      {
        "v": "feel like (sentir-se como)",
        "tags": [
          "verb",
          "verb_link"
        ]
      },
      {
        "v": "act (agir como)",
        "tags": [
          "verb",
          "verb_link"
        ]
      },
      {
        "v": "could (poderia)",
        "tags": [
          "verb",
          "verb_modal"
        ]
      },
      {
        "v": "may (pode/talvez)",
        "tags": [
          "verb",
          "verb_modal"
        ]
      },
      {
        "v": "might (poderia/talvez)",
        "tags": [
          "verb",
          "verb_modal"
        ]
      },
      {
        "v": "must (dever)",
        "tags": [
          "verb",
          "verb_modal"
        ]
      },
      {
        "v": "should (deveria)",
        "tags": [
          "verb",
          "verb_modal"
        ]
      },
      {
        "v": "shall (deverá)",
        "tags": [
          "verb",
          "verb_modal"
        ]
      },
      {
        "v": "will (irá)",
        "tags": [
          "verb",
          "verb_modal"
        ]
      },
      {
        "v": "would (iria)",
        "tags": [
          "verb",
          "verb_modal"
        ]
      },
      {
        "v": "dare (ousar)",
        "tags": [
          "verb",
          "verb_modal"
        ]
      },
      {
        "v": "had better (é melhor)",
        "tags": [
          "verb",
          "verb_modal"
        ]
      },
      {
        "v": "would rather (preferiria)",
        "tags": [
          "verb",
          "verb_modal"
        ]
      },
      {
        "v": "must not (não deve)",
        "tags": [
          "verb",
          "verb_modal"
        ]
      },
      {
        "v": "like (gostar)",
        "tags": [
          "verb",
          "verb_ing"
        ]
      },
      {
        "v": "like (gostar)",
        "tags": [
          "verb",
          "verb_ing",
          "verb_obj"
        ]
      },
      {
        "v": "have (ter)",
        "tags": [
          "verb",
          "verb_obj"
        ]
      },
      {
        "v": "eating (comendo)",
        "tags": [
          "verb",
          "verb_ing_form",
          "verb_obj"
        ]
      },
      {
        "v": "reading (lendo)",
        "tags": [
          "verb",
          "verb_ing_form",
          "verb_obj"
        ]
      },
      {
        "v": "writing (escrevendo)",
        "tags": [
          "verb",
          "verb_ing_form",
          "verb_obj"
        ]
      },
      {
        "v": "watching (assistindo)",
        "tags": [
          "verb",
          "verb_ing_form",
          "verb_obj"
        ]
      },
      {
        "v": "building (construindo)",
        "tags": [
          "verb",
          "verb_ing_form",
          "verb_obj"
        ]
      },
      {
        "v": "fixing (consertando)",
        "tags": [
          "verb",
          "verb_ing_form",
          "verb_obj"
        ]
      },
      {
        "v": "cleaning (limpando)",
        "tags": [
          "verb",
          "verb_ing_form",
          "verb_obj"
        ]
      },
      {
        "v": "carrying (carregando)",
        "tags": [
          "verb",
          "verb_ing_form",
          "verb_obj"
        ]
      },
      {
        "v": "using (usando)",
        "tags": [
          "verb",
          "verb_ing_form",
          "verb_obj"
        ]
      },
      {
        "v": "opening (abrindo)",
        "tags": [
          "verb",
          "verb_ing_form",
          "verb_obj"
        ]
      },
      {
        "v": "closing (fechando)",
        "tags": [
          "verb",
          "verb_ing_form",
          "verb_obj"
        ]
      },
      {
        "v": "buying (comprando)",
        "tags": [
          "verb",
          "verb_ing_form",
          "verb_obj"
        ]
      },
      {
        "v": "selling (vendendo)",
        "tags": [
          "verb",
          "verb_ing_form",
          "verb_obj"
        ]
      },
      {
        "v": "taking (pegando)",
        "tags": [
          "verb",
          "verb_ing_form",
          "verb_obj"
        ]
      },
      {
        "v": "bringing (trazendo)",
        "tags": [
          "verb",
          "verb_ing_form",
          "verb_obj"
        ]
      },
      {
        "v": "making (fazendo)",
        "tags": [
          "verb",
          "verb_ing_form",
          "verb_obj"
        ]
      },
      {
        "v": "choosing (escolhendo)",
        "tags": [
          "verb",
          "verb_ing_form",
          "verb_obj"
        ]
      },
      {
        "v": "calling (ligando/chamando)",
        "tags": [
          "verb",
          "verb_ing_form",
          "verb_obj"
        ]
      },
      {
        "v": "helping (ajudando)",
        "tags": [
          "verb",
          "verb_ing_form",
          "verb_obj"
        ]
      },
      {
        "v": "meeting (encontrando)",
        "tags": [
          "verb",
          "verb_ing_form",
          "verb_obj"
        ]
      },
      {
        "v": "visiting (visitando)",
        "tags": [
          "verb",
          "verb_ing_form",
          "verb_obj"
        ]
      },
      {
        "v": "finding (encontrando)",
        "tags": [
          "verb",
          "verb_ing_form",
          "verb_obj"
        ]
      },
      {
        "v": "keeping (mantendo)",
        "tags": [
          "verb",
          "verb_ing_form",
          "verb_obj"
        ]
      },
      {
        "v": "holding (segurando)",
        "tags": [
          "verb",
          "verb_ing_form",
          "verb_obj"
        ]
      },
      {
        "v": "cutting (cortando)",
        "tags": [
          "verb",
          "verb_ing_form",
          "verb_obj"
        ]
      },
      {
        "v": "breaking (quebrando)",
        "tags": [
          "verb",
          "verb_ing_form",
          "verb_obj"
        ]
      },
      {
        "v": "washing (lavando)",
        "tags": [
          "verb",
          "verb_ing_form",
          "verb_obj"
        ]
      },
      {
        "v": "painting (pintando)",
        "tags": [
          "verb",
          "verb_ing_form",
          "verb_obj"
        ]
      },
      {
        "v": "driving (dirigindo)",
        "tags": [
          "verb",
          "verb_ing_form",
          "verb_obj"
        ]
      },
      {
        "v": "playing (jogando)",
        "tags": [
          "verb",
          "verb_ing_form",
          "verb_obj"
        ]
      },
      {
        "v": "studying (estudando)",
        "tags": [
          "verb",
          "verb_ing_form",
          "verb_obj"
        ]
      },
      {
        "v": "learning (aprendendo)",
        "tags": [
          "verb",
          "verb_ing_form",
          "verb_obj"
        ]
      },
      {
        "v": "teaching (ensinando)",
        "tags": [
          "verb",
          "verb_ing_form",
          "verb_obj"
        ]
      },
      {
        "v": "sending (enviando)",
        "tags": [
          "verb",
          "verb_ing_form",
          "verb_obj"
        ]
      },
      {
        "v": "receiving (recebendo)",
        "tags": [
          "verb",
          "verb_ing_form",
          "verb_obj"
        ]
      },
      {
        "v": "checking (verificando)",
        "tags": [
          "verb",
          "verb_ing_form",
          "verb_obj"
        ]
      },
      {
        "v": "changing (mudando)",
        "tags": [
          "verb",
          "verb_ing_form",
          "verb_obj"
        ]
      },
      {
        "v": "looking for (procurando)",
        "tags": [
          "verb",
          "verb_ing_form",
          "verb_prep"
        ]
      },
      {
        "v": "waiting for (esperando)",
        "tags": [
          "verb",
          "verb_ing_form",
          "verb_prep"
        ]
      },
      {
        "v": "thinking about (pensando sobre)",
        "tags": [
          "verb",
          "verb_ing_form",
          "verb_prep"
        ]
      },
      {
        "v": "looking at (olhando para)",
        "tags": [
          "verb",
          "verb_ing_form",
          "verb_prep"
        ]
      },
      {
        "v": "working on (trabalhando em)",
        "tags": [
          "verb",
          "verb_ing_form",
          "verb_prep"
        ]
      },
      {
        "v": "paying for (pagando por)",
        "tags": [
          "verb",
          "verb_ing_form",
          "verb_prep"
        ]
      },
      {
        "v": "dealing with (lidando com)",
        "tags": [
          "verb",
          "verb_ing_form",
          "verb_prep"
        ]
      },
      {
        "v": "depending on (dependendo de)",
        "tags": [
          "verb",
          "verb_ing_form",
          "verb_prep"
        ]
      },
      {
        "v": "believing in (acreditando em)",
        "tags": [
          "verb",
          "verb_ing_form",
          "verb_prep"
        ]
      },
      {
        "v": "focusing on (focando em)",
        "tags": [
          "verb",
          "verb_ing_form",
          "verb_prep"
        ]
      },
      {
        "v": "agreeing with (concordando com)",
        "tags": [
          "verb",
          "verb_ing_form",
          "verb_prep"
        ]
      },
      {
        "v": "waiting on (aguardando)",
        "tags": [
          "verb",
          "verb_ing_form",
          "verb_prep"
        ]
      },
      {
        "v": "asking for (pedindo)",
        "tags": [
          "verb",
          "verb_ing_form",
          "verb_prep"
        ]
      },
      {
        "v": "preparing for (preparando para)",
        "tags": [
          "verb",
          "verb_ing_form",
          "verb_prep"
        ]
      },
      {
        "v": "searching for (procurando)",
        "tags": [
          "verb",
          "verb_ing_form",
          "verb_prep"
        ]
      },
      {
        "v": "coming from (vindo de)",
        "tags": [
          "verb",
          "verb_ing_form",
          "verb_prep"
        ]
      },
      {
        "v": "living in (morando em)",
        "tags": [
          "verb",
          "verb_ing_form",
          "verb_prep"
        ]
      },
      {
        "v": "staying at (ficando em)",
        "tags": [
          "verb",
          "verb_ing_form",
          "verb_prep"
        ]
      },
      {
        "v": "walking through (andando por)",
        "tags": [
          "verb",
          "verb_ing_form",
          "verb_prep"
        ]
      },
      {
        "v": "running into (encontrando por acaso)",
        "tags": [
          "verb",
          "verb_ing_form",
          "verb_prep"
        ]
      },
      {
        "v": "to eat (comer)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to buy (comprar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to take (pegar/levar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to use (usar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to see (ver)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to watch (assistir)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to read (ler)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to write (escrever)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to open (abrir)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to close (fechar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to clean (limpar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to build (construir)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to fix (consertar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to carry (carregar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to bring (trazer)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to choose (escolher)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to call (ligar/chamar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to help (ajudar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to meet (encontrar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to visit (visitar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to eat (comer)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to buy (comprar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to take (pegar/levar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to use (usar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to see (ver)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to watch (assistir)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to read (ler)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to write (escrever)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to open (abrir)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to close (fechar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to clean (limpar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to build (construir)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to fix (consertar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to carry (carregar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to bring (trazer)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to choose (escolher)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to call (ligar/chamar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to help (ajudar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to meet (encontrar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to visit (visitar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to eat (comer)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to buy (comprar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to take (pegar/levar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to use (usar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to see (ver)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to watch (assistir)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to read (ler)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to write (escrever)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to open (abrir)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to close (fechar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to clean (limpar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to build (construir)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to fix (consertar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to carry (carregar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to bring (trazer)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to choose (escolher)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to call (ligar/chamar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to help (ajudar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to meet (encontrar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to visit (visitar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to eat (comer)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to buy (comprar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to take (pegar/levar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to use (usar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to see (ver)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to watch (assistir)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to read (ler)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to write (escrever)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to open (abrir)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to close (fechar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to clean (limpar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to build (construir)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to fix (consertar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to carry (carregar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to bring (trazer)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to choose (escolher)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to call (ligar/chamar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to help (ajudar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to meet (encontrar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to visit (visitar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to eat (comer)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to buy (comprar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to take (pegar/levar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to use (usar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to see (ver)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to watch (assistir)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to read (ler)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to write (escrever)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to open (abrir)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to close (fechar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to clean (limpar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to build (construir)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to fix (consertar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to carry (carregar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to bring (trazer)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to choose (escolher)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to call (ligar/chamar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to help (ajudar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to meet (encontrar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to visit (visitar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to eat (comer)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to buy (comprar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to take (pegar/levar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to use (usar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to see (ver)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to watch (assistir)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to read (ler)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to write (escrever)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to open (abrir)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to close (fechar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to clean (limpar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to build (construir)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to fix (consertar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to carry (carregar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to bring (trazer)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to choose (escolher)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to call (ligar/chamar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to help (ajudar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to meet (encontrar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to visit (visitar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to eat (comer)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to buy (comprar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to take (pegar/levar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to use (usar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to see (ver)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to watch (assistir)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to read (ler)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to write (escrever)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to open (abrir)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to close (fechar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to clean (limpar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to build (construir)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to fix (consertar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to carry (carregar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to bring (trazer)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to choose (escolher)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to call (ligar/chamar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to help (ajudar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to meet (encontrar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to visit (visitar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to eat (comer)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to buy (comprar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to take (pegar/levar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to use (usar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to see (ver)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to watch (assistir)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to read (ler)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to write (escrever)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to open (abrir)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to close (fechar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to clean (limpar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to build (construir)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to fix (consertar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to carry (carregar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to bring (trazer)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to choose (escolher)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to call (ligar/chamar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to help (ajudar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to meet (encontrar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "to visit (visitar)",
        "tags": [
          "verb",
          "verb_inf",
          "verb_obj"
        ]
      },
      {
        "v": "want (querer)",
        "tags": [
          "verb",
          "verb_to"
        ]
      },
      {
        "v": "need (precisar)",
        "tags": [
          "verb",
          "verb_to"
        ]
      },
      {
        "v": "plan (planejar)",
        "tags": [
          "verb",
          "verb_to"
        ]
      },
      {
        "v": "decide (decidir)",
        "tags": [
          "verb",
          "verb_to"
        ]
      },
      {
        "v": "try (tentar)",
        "tags": [
          "verb",
          "verb_to"
        ]
      },
      {
        "v": "learn (aprender)",
        "tags": [
          "verb",
          "verb_to"
        ]
      },
      {
        "v": "start (começar a)",
        "tags": [
          "verb",
          "verb_to"
        ]
      },
      {
        "v": "continue (continuar a)",
        "tags": [
          "verb",
          "verb_to"
        ]
      },
      {
        "v": "hope (esperar)",
        "tags": [
          "verb",
          "verb_to"
        ]
      },
      {
        "v": "agree (concordar)",
        "tags": [
          "verb",
          "verb_to"
        ]
      },
      {
        "v": "promise (prometer)",
        "tags": [
          "verb",
          "verb_to"
        ]
      },
      {
        "v": "forget (esquecer)",
        "tags": [
          "verb",
          "verb_to"
        ]
      },
      {
        "v": "remember (lembrar)",
        "tags": [
          "verb",
          "verb_to"
        ]
      },
      {
        "v": "like (gostar de)",
        "tags": [
          "verb",
          "verb_to"
        ]
      },
      {
        "v": "love (amar)",
        "tags": [
          "verb",
          "verb_to"
        ]
      },
      {
        "v": "hate (odiar)",
        "tags": [
          "verb",
          "verb_to"
        ]
      },
      {
        "v": "prefer (preferir)",
        "tags": [
          "verb",
          "verb_to"
        ]
      },
      {
        "v": "choose (escolher)",
        "tags": [
          "verb",
          "verb_to"
        ]
      },
      {
        "v": "prepare (preparar-se)",
        "tags": [
          "verb",
          "verb_to"
        ]
      },
      {
        "v": "want (querer)",
        "tags": [
          "verb_obj"
        ]
      },
      {
        "v": "need (precisar)",
        "tags": [
          "verb_obj"
        ]
      },
      {
        "v": "know (saber/conhecer)",
        "tags": [
          "verb_obj"
        ]
      },
      {
        "v": "find (encontrar)",
        "tags": [
          "verb_obj"
        ]
      },
      {
        "v": "dislike (não gostar)",
        "tags": [
          "verb_obj"
        ]
      },
      {
        "v": "fear (temer)",
        "tags": [
          "verb_obj"
        ]
      },
      {
        "v": "doubt (duvidar)",
        "tags": [
          "verb_obj"
        ]
      },
      {
        "v": "reject (rejeitar)",
        "tags": [
          "verb_obj"
        ]
      },
      {
        "v": "ignore (ignorar)",
        "tags": [
          "verb_obj"
        ]
      },
      {
        "v": "blame (culpar)",
        "tags": [
          "verb_obj"
        ]
      },
      {
        "v": "judge (julgar)",
        "tags": [
          "verb_obj"
        ]
      },
      {
        "v": "criticize (criticar)",
        "tags": [
          "verb_obj"
        ]
      }
    ],
    "adjectives": [
      {
        "v": "big (grande)",
        "tags": [
          "adj"
        ]
      },
      {
        "v": "small (pequeno)",
        "tags": [
          "adj"
        ]
      },
      {
        "v": "good (bom)",
        "tags": [
          "adj"
        ]
      },
      {
        "v": "bad (ruim)",
        "tags": [
          "adj"
        ]
      },
      {
        "v": "new (novo)",
        "tags": [
          "adj"
        ]
      },
      {
        "v": "old (velho)",
        "tags": [
          "adj"
        ]
      },
      {
        "v": "young (jovem)",
        "tags": [
          "adj"
        ]
      },
      {
        "v": "fast (rápido)",
        "tags": [
          "adj"
        ]
      },
      {
        "v": "slow (devagar/lento)",
        "tags": [
          "adj"
        ]
      },
      {
        "v": "happy (feliz)",
        "tags": [
          "adj"
        ]
      },
      {
        "v": "sad (triste)",
        "tags": [
          "adj"
        ]
      },
      {
        "v": "easy (fácil)",
        "tags": [
          "adj"
        ]
      },
      {
        "v": "difficult (difícil)",
        "tags": [
          "adj"
        ]
      },
      {
        "v": "important (importante)",
        "tags": [
          "adj"
        ]
      },
      {
        "v": "interesting (interessante)",
        "tags": [
          "adj"
        ]
      },
      {
        "v": "boring (chato)",
        "tags": [
          "adj"
        ]
      },
      {
        "v": "busy (ocupado)",
        "tags": [
          "adj"
        ]
      },
      {
        "v": "free (livre)",
        "tags": [
          "adj"
        ]
      },
      {
        "v": "open (aberto)",
        "tags": [
          "adj"
        ]
      },
      {
        "v": "closed (fechado)",
        "tags": [
          "adj"
        ]
      },
      {
        "v": "ready (pronto)",
        "tags": [
          "adj"
        ]
      },
      {
        "v": "late (atrasado)",
        "tags": [
          "adj"
        ]
      },
      {
        "v": "early (cedo)",
        "tags": [
          "adj"
        ]
      },
      {
        "v": "full (cheio)",
        "tags": [
          "adj"
        ]
      },
      {
        "v": "empty (vazio)",
        "tags": [
          "adj"
        ]
      },
      {
        "v": "clean (limpo)",
        "tags": [
          "adj"
        ]
      },
      {
        "v": "dirty (sujo)",
        "tags": [
          "adj"
        ]
      },
      {
        "v": "hot (quente)",
        "tags": [
          "adj"
        ]
      },
      {
        "v": "cold (frio)",
        "tags": [
          "adj"
        ]
      },
      {
        "v": "strong (forte)",
        "tags": [
          "adj"
        ]
      },
      {
        "v": "weak (fraco)",
        "tags": [
          "adj"
        ]
      },
      {
        "v": "safe (seguro)",
        "tags": [
          "adj"
        ]
      },
      {
        "v": "dangerous (perigoso)",
        "tags": [
          "adj"
        ]
      },
      {
        "v": "cheap (barato)",
        "tags": [
          "adj"
        ]
      },
      {
        "v": "expensive (caro)",
        "tags": [
          "adj"
        ]
      },
      {
        "v": "beautiful (bonito)",
        "tags": [
          "adj"
        ]
      },
      {
        "v": "ugly (feio)",
        "tags": [
          "adj"
        ]
      },
      {
        "v": "nice (legal)",
        "tags": [
          "adj"
        ]
      },
      {
        "v": "kind (gentil)",
        "tags": [
          "adj"
        ]
      },
      {
        "v": "angry (bravo)",
        "tags": [
          "adj"
        ]
      },
      {
        "v": "tired (cansado)",
        "tags": [
          "adj"
        ]
      },
      {
        "v": "hungry (com fome)",
        "tags": [
          "adj"
        ]
      },
      {
        "v": "thirsty (com sede)",
        "tags": [
          "adj"
        ]
      },
      {
        "v": "sick (doente)",
        "tags": [
          "adj"
        ]
      },
      {
        "v": "healthy (saudável)",
        "tags": [
          "adj"
        ]
      }
    ],
    "complements": [
      {
        "v": "in the morning (de manhã)",
        "tags": [
          "complement"
        ]
      },
      {
        "v": "at night (à noite)",
        "tags": [
          "complement"
        ]
      },
      {
        "v": "every day (todo dia)",
        "tags": [
          "complement"
        ]
      },
      {
        "v": "all the time (o tempo todo)",
        "tags": [
          "complement"
        ]
      },
      {
        "v": "in the afternoon (à tarde)",
        "tags": [
          "complement"
        ]
      },
      {
        "v": "every week (toda semana)",
        "tags": [
          "complement"
        ]
      },
      {
        "v": "every month (todo mês)",
        "tags": [
          "complement"
        ]
      },
      {
        "v": "every year (todo ano)",
        "tags": [
          "complement"
        ]
      },
      {
        "v": "sometimes (às vezes)",
        "tags": [
          "complement"
        ]
      },
      {
        "v": "usually (geralmente)",
        "tags": [
          "complement"
        ]
      },
      {
        "v": "always (sempre)",
        "tags": [
          "complement"
        ]
      },
      {
        "v": "never (nunca)",
        "tags": [
          "complement"
        ]
      },
      {
        "v": "now (agora)",
        "tags": [
          "complement"
        ]
      },
      {
        "v": "right now (agora mesmo)",
        "tags": [
          "complement"
        ]
      },
      {
        "v": "later (mais tarde)",
        "tags": [
          "complement"
        ]
      },
      {
        "v": "soon (em breve)",
        "tags": [
          "complement"
        ]
      },
      {
        "v": "today (hoje)",
        "tags": [
          "complement"
        ]
      },
      {
        "v": "tomorrow (amanhã)",
        "tags": [
          "complement"
        ]
      },
      {
        "v": "yesterday (ontem)",
        "tags": [
          "complement"
        ]
      },
      {
        "v": "at home (em casa)",
        "tags": [
          "complement"
        ]
      },
      {
        "v": "at work (no trabalho)",
        "tags": [
          "complement"
        ]
      },
      {
        "v": "at school (na escola)",
        "tags": [
          "complement"
        ]
      },
      {
        "v": "at the airport (no aeroporto)",
        "tags": [
          "complement"
        ]
      },
      {
        "v": "in the city (na cidade)",
        "tags": [
          "complement"
        ]
      },
      {
        "v": "in the car (no carro)",
        "tags": [
          "complement"
        ]
      },
      {
        "v": "on the street (na rua)",
        "tags": [
          "complement"
        ]
      },
      {
        "v": "with my family (com minha família)",
        "tags": [
          "complement"
        ]
      },
      {
        "v": "with friends (com amigos)",
        "tags": [
          "complement"
        ]
      },
      {
        "v": "alone (sozinho)",
        "tags": [
          "complement"
        ]
      },
      {
        "v": "together (juntos)",
        "tags": [
          "complement"
        ]
      },
      {
        "v": "for a long time (por muito tempo)",
        "tags": [
          "complement"
        ]
      },
      {
        "v": "for a short time (por pouco tempo)",
        "tags": [
          "complement"
        ]
      },
      {
        "v": "every morning (toda manhã)",
        "tags": [
          "complement"
        ]
      },
      {
        "v": "every night (toda noite)",
        "tags": [
          "complement"
        ]
      },
      {
        "v": "on weekends (nos finais de semana)",
        "tags": [
          "complement"
        ]
      },
      {
        "v": "during the day (durante o dia)",
        "tags": [
          "complement"
        ]
      },
      {
        "v": "after work (depois do trabalho)",
        "tags": [
          "complement"
        ]
      },
      {
        "v": "before class (antes da aula)",
        "tags": [
          "complement"
        ]
      },
      {
        "v": "at the moment (no momento)",
        "tags": [
          "complement"
        ]
      },
      {
        "v": "from time to time (de vez em quando)",
        "tags": [
          "complement"
        ]
      }
    ]
  },
  "conversation_moves": {
    "greeting": [
      {
        "v": "hello (olá)",
        "tags": [
          "greeting"
        ]
      },
      {
        "v": "hi (oi)",
        "tags": [
          "greeting"
        ]
      },
      {
        "v": "good morning (bom dia)",
        "tags": [
          "greeting",
          "moves1"
        ]
      },
      {
        "v": "good afternoon (boa tarde)",
        "tags": [
          "greeting",
          "moves1"
        ]
      },
      {
        "v": "good evening (boa noite)",
        "tags": [
          "greeting",
          "moves1"
        ]
      },
      {
        "v": "nice to meet you (prazer em conhecer)",
        "tags": [
          "greeting",
          "moves1"
        ]
      },
      {
        "v": "how are you? (como você está?)",
        "tags": [
          "greeting",
          "moves1"
        ]
      },
      {
        "v": "how is it going? (como vai?)",
        "tags": [
          "greeting",
          "moves1"
        ]
      }
    ],
    "orientation": [
      {
        "v": "I need help (eu preciso de ajuda)",
        "tags": [
          "orientation"
        ]
      },
      {
        "v": "I am looking for (eu estou procurando)",
        "tags": [
          "orientation"
        ]
      },
      {
        "v": "I need to tell you something (preciso te contar algo)",
        "tags": [
          "orientation",
          "moves1"
        ]
      },
      {
        "v": "I want to tell you something important (quero te contar algo importante)",
        "tags": [
          "orientation",
          "moves1"
        ]
      },
      {
        "v": "let me explain something (deixa eu explicar algo)",
        "tags": [
          "orientation",
          "moves1"
        ]
      },
      {
        "v": "let me show you something (deixa eu te mostrar algo)",
        "tags": [
          "orientation",
          "moves1"
        ]
      },
      {
        "v": "here’s what happened (aqui está o que aconteceu)",
        "tags": [
          "orientation",
          "moves1"
        ]
      },
      {
        "v": "this is what happened (isso foi o que aconteceu)",
        "tags": [
          "orientation",
          "moves1"
        ]
      },
      {
        "v": "the point is (o ponto é)",
        "tags": [
          "orientation",
          "moves1"
        ]
      },
      {
        "v": "what I want to say is this (o que eu quero dizer é isso)",
        "tags": [
          "orientation",
          "moves1"
        ]
      },
      {
        "v": "to be honest (para ser sincero)",
        "tags": [
          "orientation",
          "moves1"
        ]
      },
      {
        "v": "you won’t believe this (você não vai acreditar nisso)",
        "tags": [
          "orientation",
          "moves1"
        ]
      },
      {
        "v": "In my opinion (na minha opinião)",
        "tags": [
          "orientation"
        ]
      },
      {
        "v": "I think (eu acho)",
        "tags": [
          "orientation"
        ]
      },
      {
        "v": "I believe (eu acredito)",
        "tags": [
          "orientation"
        ]
      },
      {
        "v": "I feel (eu sinto)",
        "tags": [
          "orientation"
        ]
      },
      {
        "v": "Let me say something (deixa eu dizer algo)",
        "tags": [
          "orientation"
        ]
      },
      {
        "v": "Let me tell you (deixa eu te contar)",
        "tags": [
          "orientation"
        ]
      },
      {
        "v": "Let me mention something (deixa eu mencionar algo)",
        "tags": [
          "orientation"
        ]
      },
      {
        "v": "I have something to say (eu tenho algo para dizer)",
        "tags": [
          "orientation"
        ]
      },
      {
        "v": "I have something to tell you (eu tenho algo para te contar)",
        "tags": [
          "orientation"
        ]
      },
      {
        "v": "I want to say something (eu quero dizer algo)",
        "tags": [
          "orientation"
        ]
      },
      {
        "v": "Can I say something? (posso dizer algo?)",
        "tags": [
          "orientation"
        ]
      },
      {
        "v": "Can I ask you something? (posso te perguntar algo?)",
        "tags": [
          "orientation"
        ]
      },
      {
        "v": "Listen to this (escuta isso)",
        "tags": [
          "orientation"
        ]
      },
      {
        "v": "Here is the thing (a questão é)",
        "tags": [
          "orientation"
        ]
      },
      {
        "v": "This is important (isso é importante)",
        "tags": [
          "orientation"
        ]
      }
    ],
    "information": [
      {
        "v": "I am at the airport (eu estou no aeroporto)",
        "tags": [
          "information"
        ]
      },
      {
        "v": "the flight is delayed (o voo está atrasado)",
        "tags": [
          "information"
        ]
      },
      {
        "v": "I like this (eu gosto disso)",
        "tags": [
          "information",
          "moves1"
        ]
      },
      {
        "v": "I love this idea (eu amo essa ideia)",
        "tags": [
          "information",
          "moves1"
        ]
      },
      {
        "v": "I help you (eu te ajudo)",
        "tags": [
          "information",
          "moves1"
        ]
      },
      {
        "v": "I call you later (eu te ligo depois)",
        "tags": [
          "information",
          "moves1"
        ]
      },
      {
        "v": "I send you a message (eu te envio uma mensagem)",
        "tags": [
          "information",
          "moves1"
        ]
      },
      {
        "v": "I want to help you (eu quero te ajudar)",
        "tags": [
          "information",
          "moves1"
        ]
      },
      {
        "v": "I need you to understand this (eu preciso que você entenda isso)",
        "tags": [
          "information",
          "moves1"
        ]
      },
      {
        "v": "I want you to be ready (eu quero que você esteja pronto)",
        "tags": [
          "information",
          "moves1"
        ]
      },
      {
        "v": "the class is simple (a aula é simples)",
        "tags": [
          "information",
          "moves1"
        ]
      },
      {
        "v": "I will help you tomorrow (eu vou te ajudar amanhã)",
        "tags": [
          "information",
          "moves1"
        ]
      }
    ],
    "interaction": [
      {
        "v": "can you help me? (você pode me ajudar?)",
        "tags": [
          "interaction"
        ]
      },
      {
        "v": "do you understand? (você entende?)",
        "tags": [
          "interaction"
        ]
      },
      {
        "v": "what do you think? (o que você acha?)",
        "tags": [
          "interaction",
          "moves1"
        ]
      },
      {
        "v": "why do you think that? (por que você acha isso?)",
        "tags": [
          "interaction",
          "moves1"
        ]
      },
      {
        "v": "can you explain this? (você pode explicar isso?)",
        "tags": [
          "interaction",
          "moves1"
        ]
      },
      {
        "v": "tell me what happened (me conta o que aconteceu)",
        "tags": [
          "interaction",
          "moves1"
        ]
      },
      {
        "v": "tell me your opinion (me diga sua opinião)",
        "tags": [
          "interaction",
          "moves1"
        ]
      },
      {
        "v": "do you agree? (você concorda?)",
        "tags": [
          "interaction",
          "moves1"
        ]
      },
      {
        "v": "do you get it? (você entende?)",
        "tags": [
          "interaction",
          "moves1"
        ]
      },
      {
        "v": "this is good, right? (isso é bom, certo?)",
        "tags": [
          "interaction",
          "moves1"
        ]
      }
    ],
    "connection": [
      {
        "v": "and (e)",
        "tags": [
          "connection"
        ]
      },
      {
        "v": "so (então)",
        "tags": [
          "connection"
        ]
      },
      {
        "v": "first (primeiro)",
        "tags": [
          "connection",
          "moves1"
        ]
      },
      {
        "v": "to start (para começar)",
        "tags": [
          "connection",
          "moves1"
        ]
      },
      {
        "v": "then (depois)",
        "tags": [
          "connection",
          "moves1"
        ]
      },
      {
        "v": "after that (depois disso)",
        "tags": [
          "connection",
          "moves1"
        ]
      },
      {
        "v": "also (também)",
        "tags": [
          "connection",
          "moves1"
        ]
      },
      {
        "v": "but (mas)",
        "tags": [
          "connection",
          "moves1"
        ]
      },
      {
        "v": "because (porque)",
        "tags": [
          "connection",
          "moves1"
        ]
      },
      {
        "v": "for example (por exemplo)",
        "tags": [
          "connection",
          "moves1"
        ]
      },
      {
        "v": "That is because (isso é porque)",
        "tags": [
          "connection"
        ]
      },
      {
        "v": "This is because (isso é porque)",
        "tags": [
          "connection"
        ]
      },
      {
        "v": "That is why (é por isso que)",
        "tags": [
          "connection"
        ]
      },
      {
        "v": "This is why (é por isso que)",
        "tags": [
          "connection"
        ]
      },
      {
        "v": "The reason is that (a razão é que)",
        "tags": [
          "connection"
        ]
      },
      {
        "v": "The reason for that is that (a razão para isso é que)",
        "tags": [
          "connection"
        ]
      },
      {
        "v": "One reason is that (uma razão é que)",
        "tags": [
          "connection"
        ]
      },
      {
        "v": "This happens because (isso acontece porque)",
        "tags": [
          "connection"
        ]
      },
      {
        "v": "This is due to the fact that (isso é devido ao fato de que)",
        "tags": [
          "connection"
        ]
      },
      {
        "v": "The explanation is that (a explicação é que)",
        "tags": [
          "connection"
        ]
      },
      {
        "v": "The cause is that (a causa é que)",
        "tags": [
          "connection"
        ]
      }
    ],
    "correction": [
      {
        "v": "sorry, I mean (desculpa, eu quis dizer)",
        "tags": [
          "correction"
        ]
      },
      {
        "v": "let me correct that (deixa eu corrigir)",
        "tags": [
          "correction"
        ]
      },
      {
        "v": "I mean (quero dizer)",
        "tags": [
          "correction",
          "moves1"
        ]
      },
      {
        "v": "actually (na verdade)",
        "tags": [
          "correction",
          "moves1"
        ]
      },
      {
        "v": "in fact (na verdade)",
        "tags": [
          "correction",
          "moves1"
        ]
      },
      {
        "v": "sorry, I mean (desculpa, quero dizer)",
        "tags": [
          "correction",
          "moves1"
        ]
      },
      {
        "v": "that is not correct (isso não está correto)",
        "tags": [
          "correction",
          "moves1"
        ]
      },
      {
        "v": "let me rephrase that (vou reformular)",
        "tags": [
          "correction",
          "moves1"
        ]
      },
      {
        "v": "let me say it again (deixa eu dizer de novo)",
        "tags": [
          "correction",
          "moves1"
        ]
      },
      {
        "v": "what I mean is (o que eu quero dizer é)",
        "tags": [
          "correction",
          "moves1"
        ]
      },
      {
        "v": "that is not what I mean (não é isso que eu quero dizer)",
        "tags": [
          "correction",
          "moves1"
        ]
      },
      {
        "v": "Let me put it this way (deixa eu colocar de outra forma)",
        "tags": [
          "correction"
        ]
      },
      {
        "v": "What I mean is (o que eu quero dizer é)",
        "tags": [
          "correction"
        ]
      },
      {
        "v": "Let me rephrase that (deixa eu reformular isso)",
        "tags": [
          "correction"
        ]
      },
      {
        "v": "I mean (quero dizer)",
        "tags": [
          "correction"
        ]
      },
      {
        "v": "In other words (em outras palavras)",
        "tags": [
          "correction"
        ]
      },
      {
        "v": "Let me explain better (deixa eu explicar melhor)",
        "tags": [
          "correction"
        ]
      },
      {
        "v": "Let me say that again (deixa eu dizer isso de novo)",
        "tags": [
          "correction"
        ]
      },
      {
        "v": "That is not exactly what I mean (não é exatamente isso que eu quero dizer)",
        "tags": [
          "correction"
        ]
      },
      {
        "v": "What I am trying to say is (o que eu estou tentando dizer é)",
        "tags": [
          "correction"
        ]
      },
      {
        "v": "Actually (na verdade)",
        "tags": [
          "correction"
        ]
      },
      {
        "v": "To be clear (para deixar claro)",
        "tags": [
          "correction"
        ]
      }
    ],
    "comment": [
      {
        "v": "that is good (isso é bom)",
        "tags": [
          "comment"
        ]
      },
      {
        "v": "that is interesting (isso é interessante)",
        "tags": [
          "comment"
        ]
      },
      {
        "v": "I like that (eu gosto disso)",
        "tags": [
          "comment",
          "moves1"
        ]
      },
      {
        "v": "I don’t like that (eu não gosto disso)",
        "tags": [
          "comment",
          "moves1"
        ]
      },
      {
        "v": "that is surprising (isso é surpreendente)",
        "tags": [
          "comment",
          "moves1"
        ]
      },
      {
        "v": "that makes sense (faz sentido)",
        "tags": [
          "comment",
          "moves1"
        ]
      },
      {
        "v": "I agree with that (eu concordo com isso)",
        "tags": [
          "comment",
          "moves1"
        ]
      },
      {
        "v": "I don’t agree (eu não concordo)",
        "tags": [
          "comment",
          "moves1"
        ]
      },
      {
        "v": "that is amazing (isso é incrível)",
        "tags": [
          "comment",
          "moves1"
        ]
      },
      {
        "v": "that is funny (isso é engraçado)",
        "tags": [
          "comment",
          "moves1"
        ]
      },
      {
        "v": "that is great (isso é ótimo)",
        "tags": [
          "comment",
          "moves1"
        ]
      }
    ],
    "conclusion": [
      {
        "v": "that's all (isso é tudo)",
        "tags": [
          "conclusion"
        ]
      },
      {
        "v": "thank you (obrigado)",
        "tags": [
          "conclusion"
        ]
      },
      {
        "v": "so, that is the point (esse é o ponto)",
        "tags": [
          "conclusion",
          "moves1"
        ]
      },
      {
        "v": "so, this is the idea (essa é a ideia)",
        "tags": [
          "conclusion",
          "moves1"
        ]
      },
      {
        "v": "that is what I mean (é isso que eu quero dizer)",
        "tags": [
          "conclusion",
          "moves1"
        ]
      },
      {
        "v": "this is important (isso é importante)",
        "tags": [
          "conclusion",
          "moves1"
        ]
      },
      {
        "v": "so, that is it (então é isso)",
        "tags": [
          "conclusion",
          "moves1"
        ]
      },
      {
        "v": "that’s all (isso é tudo)",
        "tags": [
          "conclusion",
          "moves1"
        ]
      },
      {
        "v": "see you later (até mais)",
        "tags": [
          "conclusion",
          "moves1"
        ]
      },
      {
        "v": "take care (se cuida)",
        "tags": [
          "conclusion",
          "moves1"
        ]
      },
      {
        "v": "this is my conclusion (essa é minha conclusão)",
        "tags": [
          "conclusion",
          "moves1"
        ]
      }
    ]
  }
};