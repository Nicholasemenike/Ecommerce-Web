package net.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.model.Shoe;

@Repository
public interface ShoeRepository extends JpaRepository<Shoe, Long>{

    void changeShoePrice(Long id, double price);

}
