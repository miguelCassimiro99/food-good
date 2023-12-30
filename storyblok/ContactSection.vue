<script setup lang="ts">
const formData = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const submitForm = async () => {
  const emailBody = `mailto:miguel.cassimiro99@gmail.com?subject=${formData.subject}&body=Olá, meu nome é ${formData.name}. ${formData.message} (${formData.email})`

  window.location.href = emailBody
}
</script>
<template>
  <div class="w-full flex flex-col justify-start items-center mb-20 h-[50vh]">
    <form
      @submit.prevent="submitForm"
      class="container flex flex-col justify-start items-center gap-2 max-w-lg w-full px-4 md:px-0">
      <div class="flex flex-col md:flex-row gap-2 w-full">
        <input
          class="contact-input flex-1"
          type="text"
          name="name"
          v-model="formData.name"
          placeholder="Seu nome" />
        <input
          class="contact-input flex-1"
          type="email"
          name="email"
          v-model="formData.email"
          placeholder="exemplo@email.com" />
      </div>
      <input
        class="contact-input w-full"
        type="text"
        name="subject"
        v-model="formData.subject"
        placeholder="Assunto" />
      <textarea
        class="contact-input w-full min-h-[12vh]"
        placeholder="Mensagem"
        v-model="formData.message" />
      <button
        class="bg-primary shadow-lg py-2 px-10 rounded-md text-white font-bold text-lg primary transition-all duration-500 hover:opacity-90">
        Enviar
      </button>
    </form>
  </div>
</template>
