const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "noor9027",
          name: "Noor Mohammad Talukder",
          phone: "321 654 987",
          email: "abc@gmail.com",
        },
        {
          id: "alif724",
          name: "Alif Islam",
          phone: "123 456 789",
          email: "bbc@gmail.com",
        },
      ],
    };
  },
});

app.component("friend-contact", {
  template: `
    <li >
        <h2>{{friend.name}}</h2>
        <button @click="toggleDetails()">
        {{detailsAreVisible? 'Hide':'Show'}} Details</button>

        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong>{{friend.phone}}</li>
            <li><strong>Email:</strong>{{friend.email}}</li>
        </ul>
    </li>
    `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "noor9027",
        name: "Noor Mohammad Talukder",
        phone: "321 654 987",
        email: "abc@gmail.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});
app.mount("#app");
