# Notes

## Die einzelnen Steps
### Step 1
- Nuxt Projekt angelegt. Nuxt2, da Nuxt3 unstable ist und ich mich noch nicht in Nuxt3 reingelesen habe.
- [Form](/components/Form.vue) Komponente angelegt. 
- Inputs für FirstName, LastName und Email angelegt
- Beim Klick auf den Send Button werden die Values der jeweiligen Inputs in der Komponente gespeichert und anschließend mittels alert 'Hello at Hokify' ausgegeben

### Step 2
- Relativ einfach, da Vuex im Nuxt Projekt mitangelegt wurde
- im [store](/store) Ordner ein [index.js](/store/index.js) angelegt, wo zum einen der state sich befindet und zum anderen die mutations
- in der [Form](/components/Form.vue) Komponente werden die Daten aus dem Store geladen und den Variablen zugewiesen
- Beim Speichern bzw. beim Klick auf den Button 'Send' wird mittels der Mutation die Daten dem Store zugewiesen und quasi global gespeichert
- unter [pages](/pages) neues Vue File [otherpage.vue](/pages/otherpage.vue) angelegt
- in [otherpage.vue](/pages/otherpage.vue) ein Button hinzugefügt, der bei einem Klick, die Daten gloabl löscht bzw. ein leeres Objekt zugewiesen bekommt.

### Step 3
- Dark Mode Guide von Tailwind befolgt und bei den einzelnen Elementen dark-Klassen hinzugefügt
- in der [Navigation](/components/Navigation.vue) ein Button hinzugefügt, der den Theme Change triggert. Genauer gesagt, entweder die Klasse 'dark' dem html Element entfernt oder hinzufügt.

## Challenges
- eine Option das OS-präferierte Color Scheme zu übernehmen
- VueX und v-model -> dass, das quasi nicht 'direkt' funktioniert, da nur Read-only
- Labels der Inputs war eine kleine Herausforderung, da noch nie implementiert, aber ich persönlich vom UX sehr schön finde
- das Styling der Inputs, wenn man autofill verwendet
