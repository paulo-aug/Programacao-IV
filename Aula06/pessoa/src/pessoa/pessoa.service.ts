import { Injectable } from '@nestjs/common';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';
import { Pessoa } from './entities/pessoa.entity';

@Injectable()
export class PessoaService {

  private pessoas: Pessoa[] = [];
  private id = 1;

  create(createPessoaDto: CreatePessoaDto) {
    const pessoa: Pessoa = {
      id: this.id++,
      ...createPessoaDto,
    };

    this.pessoas.push(pessoa);

    return pessoa;
  }

  findAll() {
    return this.pessoas;
  }

  findOne(id: number) {
    return this.pessoas.find(p => p.id === id);
  }

  update(id: number, updatePessoaDto: UpdatePessoaDto) {
    const pessoa = this.findOne(id);

    if (pessoa) {
      Object.assign(pessoa, updatePessoaDto);
    }

    return pessoa;
  }

  remove(id: number) {
    const index = this.pessoas.findIndex(p => p.id === id);

    if (index >= 0) {
      return this.pessoas.splice(index, 1);
    }

    return [];
  }
}
