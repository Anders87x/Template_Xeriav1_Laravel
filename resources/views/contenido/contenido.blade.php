@extends('principal')
@section('contenido')
    <template v-if="menu==1">
        <buttons></buttons>
    </template>

    <template v-if="menu==2">
        <cards></cards>
    </template>

    <template v-if="menu==3">
        <tabs></tabs>
    </template>
@endsection
