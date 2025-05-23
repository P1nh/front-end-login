import './index.css';
import { Input, } from "./components/ui/input"
import { Label } from './components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../src/components/ui/select"
import { Button } from './components/ui/button';
export function App() {

  return (
    <div className='flex items-center justify-center h-screen w-full'>
      <div className='w-full max-w-2xl bg-white shadow rounded p-8'>
        <h1 className='text-2xl font-bold text-center'>Cadastro para Registro</h1>
        <form className=" flex gap-4 flex-col mt-6">
          <div className='grid grid-cols-2 gap-4'>

            <div>
              <Label>Primeiro nome</Label>
              <Input type='text' placeholder='Arthur'></Input>
            </div>
            <div>
              <Label>Ultimo nome</Label>
              <Input type='text' placeholder='Pinheiro'></Input>
            </div>
            <div>
              <Label>E-mail</Label>
              <Input type='email' placeholder="seu.email@exemplo.com"></Input>
            </div>
            <div>
              <Label>Numero</Label>
              <Input type='tel' placeholder="(00) 00000-0000"></Input>

            </div>
          </div>
          <div className='grid grid-cols-3 gap-4 items-end'>
            <div>
              <Label>Data de nascimento</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="DIa" />
                </SelectTrigger>
                <SelectContent>
                  {Array(31)
                    .fill(1)
                    .map((_, index) => {
                      const value = String(index + 1).padStart(2, "0");
                      return (
                        <SelectItem
                          key={index}
                          id={String(index)}
                          value={value}
                        >
                          {value}
                          
                        </SelectItem>
                      );
                    })}

                </SelectContent>
              </Select>
            </div>
            <div>

              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Mês" />
                </SelectTrigger>
                <SelectContent>
                  {Array(12)
                    .fill(1)
                    .map((_, index) => {
                      const value = String(index + 1).padStart(2, "0");
                      return (
                        <SelectItem
                          key={index}
                          id={String(index)}
                          value={value}
                        >
                          {value}
                          
                        </SelectItem>
                      );
                    })}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Ano" />
                </SelectTrigger>
                <SelectContent>
                 {Array(200)
                    .fill(1)
                    .map((_, index) => {
                      const value = String(index + 1901).padStart(4, "0");
                      return (
                        <SelectItem
                          key={index}
                          id={String(index)}
                          value={value}
                        >
                          {value}
                          
                        </SelectItem>
                      );
                    })}
                </SelectContent>
              </Select>
            </div>

          </div>
          <Button className="mt-8" type='submit'>
            Registrar
          </Button>
        </form>

      </div>
    </div>
  )
}

