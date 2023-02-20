<template>
    <div class="mb-5">
        <div>
            <nav-component></nav-component>
        </div>
        <div class="my-5 mx-0  row justify-content-center">
            <div class="col-10">
                <Form v-slot="{ errors }" class="row gx-3" @submit="onSubmit">
                    <div class="mb-3">
                        <label class="my-2" for="name">姓名(必填)</label>
                        <Field id="name" name="姓名" v-model="user.name" rules="required"
                            :class="{ 'is-invalid': errors['姓名'] }" type="text" class="form-control"
                            placeholder="請輸入姓名">
                        </Field>
                        <error-message name="姓名" class="invalid-feedback"></error-message>
                    </div>
                    <div class="mb-3">
                        <label class="my-2" for="sex">稱謂</label>
                        <input v-model="user.sex" id="sex" name="sex" class="form-control" type="text" placeholder="稱謂">
                    </div>
                    <div class="mb-3">
                        <label class="my-2" for="email">電子郵件(必填)</label>
                        <Field id="email" name="email" type="email" class="form-control" v-model="user.email"
                            :class="{ 'is-invalid': errors['email'] }" placeholder="請輸入 Email" rules="email|required">
                        </Field>
                        <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
                    </div>
                    <div class="mb-3">
                        <label class="my-2" for="title">主旨</label>
                        <input v-model="user.title" name="title" id="title" class="form-control" type="text"
                            placeholder="主旨">
                    </div>
                    <div class="mb-3">
                        <label class="my-2" for="message">留言</label>
                        <textarea v-model="user.message" class="form-control" name="message" id="message" cols="30"
                            rows="10"></textarea>
                    </div>
                    <button class="text-white my-5 btn btn-secondary" type="submit">傳送</button>
                </Form>
            </div>
        </div>
    </div>

</template>


<script>


import NavComponent from '../components/NavComponent.vue';
import swal from 'sweetalert';

export default {
    data() {
        return {
            user: {
                name: '',
                sex: '',
                email: '',
                title: '',
                message: ''
            }
        }
    },
    components: {
        NavComponent,
        swal

    },
    methods: {
        onSubmit() {
            this.user = {
                name: '',
                sex: '',
                email: '',
                title: '',
                message: ''
            }
            swal({
                title: "成功送出表單!",
                icon: 'success',
                timer: 2000
            });
            console.log(this.user);
        },
    }
}

</script>