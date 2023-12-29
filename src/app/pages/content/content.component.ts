import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {
  // photoCover:string="https://files.realpython.com/media/Get-Started-With-Django_Watermarked.15a1e05597bc.jpg"
  // photoCoverAlt:string="django"
  // contentAuthor:string="Ricardo Pereira - 28 de dezembro de 2023"
  // contentTitle:string="Django em alta performance"
  // contentDescription:string="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, labore."
  photoCover:string=""
  photoCoverAlt:string=""
  contentAuthor:string=""
  contentTitle:string=""
  contentDescription:string=""

  private id:string|null="0"

  constructor (
      private route:ActivatedRoute
    ) {}
  
  ngOnInit(): void{
    this.route.paramMap.subscribe( value =>
        this.id = value.get("id")
      )
    
    this.setValuesToComponents(this.id)
  }

  setValuesToComponents(id:string|null){
    const result = dataFake.filter(article => article.id === id)[0]

    this.contentTitle = result.title
    this.contentAuthor = result.author
    this.contentDescription = result.description
    this.photoCover = result.photo
  }
}
