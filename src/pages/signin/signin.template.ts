const template = `
if error
    .container-tight.
        #[.text-center.text-primary.mb-4 #[i(class="fas fa-comment fa-10x")]]
        !{alert}
        !{card}
else
    .container-tight.
        #[.text-center.text-primary.mb-4 #[i(class="fas fa-comment fa-10x")]]
        !{card}
`;

export default template;
