package net.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import net.model.Cap;

@Repository
public interface CapRepository extends JpaRepository<Cap, Long>{

    @Query("ALTER TABLE Cap SET ")
    void changeCapPrice(Long id, double price);
    
}
