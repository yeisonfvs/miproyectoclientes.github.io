import { Component } from '@angular/core';
import { ClientService } from '../services/client.service';
import { iClient } from './cliente';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {

  clients: iClient[] = [];
  


  constructor(private clientService: ClientService, private httpClient: HttpClient) {
   
  }

  ngOnInit(): void {
    this.getClients();
  }


  getClients(): void {
    this.clientService.getClients().subscribe(res => {
      this.clients = res;
    })
  };

  deleteClient(id: number) {
    this.clientService.deleteClient(id).subscribe(
      (res) => {
        console.log('cliente eliminado', res);
        this.getClients();
      },
    );
  }

  getClient(id: number): void {
    this.clientService.getClient(id).subscribe(res => {
      this.clients = res;
    })
  };

}
