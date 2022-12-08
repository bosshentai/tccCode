from diagrams import Diagram, Cluster
from diagrams.aws.storage import  StorageGateway
from diagrams.generic.storage import Storage


raid0 = "Raid 0"
raid1 = "Raid 1"


with Diagram("Raid 0+1",show=False,direction="TB"):
  storageController0 = StorageGateway(raid1)


  storageController1 = StorageGateway(raid0)

  storageController2 = StorageGateway(raid0)

  storageController3 = StorageGateway(raid0)
  storageController4 = StorageGateway(raid0)
  storageController5 = StorageGateway(raid0)
  # storageController6 = StorageGateway(raid0)
  # storageController7 = StorageGateway(raid0)


  with Cluster("Disk 1 - 22TB"):
    disk1 = Storage("Projetos,Financeiros")

  with Cluster("Disk 2 - 22TB"):
    disk2 = Storage("Projetos,Comercial")

  with Cluster("Disk 3 - 22TB (Disk 1 Mirror)"):
    disk3 = Storage("Projetos,Financeiros")

  with Cluster("Disk 4 - 22TB (Disk 2 Mirror)"):
    disk4 = Storage("Projetos,Comercial")

  with Cluster("Disk 5 - 22TB "):
    disk5 = Storage("Projetos,Gestão")

  with Cluster("Disk 6 - 22TB"):
    disk6 = Storage("Projetos")

  with Cluster("Disk 7 - 22TB (Disk 5 Mirror)"):
    disk7 = Storage("Projetos,Gestão")

  with Cluster("Disk 8 - 22TB (Disk 6 Mirror)"):
    disk8 = Storage("Projetos")

  with Cluster("Disk 9 - 22TB"):
    disk9 = Storage("Projetos")

  with Cluster("Disk 10 - 22TB (Disk 9 Mirror)"):
    disk10 = Storage("Projetos")

  storageController0 >> storageController1
  storageController0 >> storageController2
  storageController0 >> storageController3
  storageController0 >> storageController4
  storageController0 >> storageController5

  storageController1 >> disk1
  storageController1 >> disk2

  storageController2 >> disk3
  storageController2 >> disk4

  storageController3 >> disk5
  storageController3 >> disk6


  storageController4 >> disk7
  storageController4 >> disk8

  storageController5 >> disk9
  storageController5 >> disk10