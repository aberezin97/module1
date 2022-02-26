const template = `
. 
  !{linkback} 
  !{changeAvatarModal}
.container-tight
    .mb-2.text-center.
      !{avatar}
      #[h3= user.login]
    .mt-2.
      !{card}
`;

export default template;
